"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES ---
type ModelStage = "Input" | "ViT" | "Q-Former" | "LLM";

interface DeepStep {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  stage: ModelStage;
  math: string; // The tensor operation or shape
}

// --- THE DEEP DIVE PIPELINE ---
const STEPS: DeepStep[] = [
  // --- INPUT ---
  {
    id: "input-raw",
    title: "1. Input Data",
    subtitle: "Raw Pixels & Text",
    desc: "We start with an RGB Image (224x224) and a News Headline. The goal: determine if the image supports the headline.",
    stage: "Input",
    math: "Img: (3, 224, 224) | Txt: 'Alien in NY'",
  },

  // --- ViT INTERNALS ---
  {
    id: "vit-patch",
    title: "2. Patch Partition",
    subtitle: "ViT / Layer 0",
    desc: "The image is sliced into 16x16 patches. A 2D convolution with stride 16 performs this 'slicing' and 'flattening' in one go.",
    stage: "ViT",
    math: "Conv2d(3, 768, k=16, s=16) → (196, 768)",
  },
  {
    id: "vit-pos",
    title: "3. Position Embedding",
    subtitle: "ViT / Embedding Layer",
    desc: "Transformers have no sense of space. We must ADD a learnable position vector to each patch so the model knows 'top-left' from 'bottom-right'.",
    stage: "ViT",
    math: "Patch_Embed + Pos_Embed → (196, 768)",
  },
  {
    id: "vit-attn",
    title: "4. Self-Attention",
    subtitle: "ViT / Encoder Block 1-12",
    desc: "Every patch 'talks' to every other patch. The 'Alien' patch looks at the 'Background' patches to understand lighting context.",
    stage: "ViT",
    math: "Softmax(QK^T / √d)V → Global Context",
  },

  // --- Q-FORMER INTERNALS ---
  {
    id: "qformer-init",
    title: "5. Query Initialization",
    subtitle: "Q-Former / Input",
    desc: "We create 32 'Learned Queries'. These are trainable vectors that act as 'buckets' to collect visual information.",
    stage: "Q-Former",
    math: "Parameter: (32, 768) initialized normally",
  },
  {
    id: "qformer-self",
    title: "6. Self-Attention (Queries)",
    subtitle: "Q-Former / Layer N",
    desc: "First, the Queries talk to *each other* to coordinate. 'You look for shadows, I'll look for edges.'",
    stage: "Q-Former",
    math: "Attention(Q, Q, Q) → Coordinated Queries",
  },
  {
    id: "qformer-cross",
    title: "7. Cross-Attention",
    subtitle: "Q-Former / The Bridge",
    desc: "The Queries now attend to the *Frozen ViT Features*. This is the bottleneck: huge image data is compressed into just 32 vectors.",
    stage: "Q-Former",
    math: "Attention(Q, K=ViT, V=ViT) → Visual Soft Prompts",
  },

  // --- LLM INTERNALS ---
  {
    id: "llm-concat",
    title: "8. Input Formatting",
    subtitle: "LLM / Embedding",
    desc: "We stick the 32 Visual Vectors (Purple) in front of the Text Embeddings (Orange). To the LLM, it looks like one long sentence.",
    stage: "LLM",
    math: "Cat([Visual_Embeds, Text_Embeds])",
  },
  {
    id: "llm-layers",
    title: "9. Decoder Processing",
    subtitle: "LLM / OPT or Flan-T5",
    desc: "The massive LLM processes the sequence. It uses causal masking (can only see past tokens) to understand the context.",
    stage: "LLM",
    math: "32 Layers of Causal Self-Attention",
  },
  {
    id: "llm-logits",
    title: "10. Calculating Logits",
    subtitle: "LLM / Unembedding Head",
    desc: "The model outputs a 'Logit' score for every word in its vocabulary (50,000+ words). High score = High probability.",
    stage: "LLM",
    math: "Linear(Hidden_Dim, Vocab_Size) → Logits",
  },
  {
    id: "llm-softmax",
    title: "11. Softmax Probability",
    subtitle: "LLM / Activation",
    desc: "We squash the logits into probabilities (0% to 100%). The word 'FAKE' gets the highest percentage.",
    stage: "LLM",
    math: "e^x / sum(e^x) → P(Word | Context)",
  },
  {
    id: "llm-reason",
    title: "12. Auto-Regressive Reason",
    subtitle: "LLM / Generation",
    desc: "The model selects 'FAKE', feeds it back in, and generates the explanation step-by-step.",
    stage: "LLM",
    math: "Loop: Predict → Append → Predict",
  },
];

export default function Blip2DeepDive() {
  const [stepIdx, setStepIdx] = useState(0);
  const activeStep = STEPS[stepIdx];

  const next = () => setStepIdx((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStepIdx((s) => Math.max(s - 1, 0));

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col items-center p-4 md:p-8">
      {/* --- TOP NAV: PIPELINE TRACKER --- */}
      <div className="w-full max-w-7xl mb-6">
        <div className="flex justify-between items-end border-b border-slate-800 pb-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              BLIP-2: Deep Execution Trace
            </h1>
            <p className="text-slate-400 text-sm">
              Fact-Checking Pipeline: "Alien in NY"
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-[10px] uppercase text-slate-600 font-bold tracking-widest">
              Current Op
            </div>
            <div className="font-mono text-cyan-400 text-sm">
              {activeStep.math}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="grid grid-cols-4 gap-2">
          {["Input", "ViT", "Q-Former", "LLM"].map((stage) => {
            const isCurrent = activeStep.stage === stage;
            const isPast =
              STEPS.findIndex((s) => s.stage === stage) <
              STEPS.findIndex((s) => s.stage === activeStep.stage);

            let color = "bg-slate-800";
            if (isCurrent) {
              if (stage === "ViT") color = "bg-blue-600";
              else if (stage === "Q-Former") color = "bg-purple-600";
              else if (stage === "LLM") color = "bg-orange-600";
              else color = "bg-slate-600";
            } else if (isPast) {
              color = "bg-slate-700"; // Visited
            }

            return (
              <div
                key={stage}
                className={`h-2 rounded-full transition-all duration-500 ${color} ${
                  isCurrent ? "scale-y-150 shadow-glow" : ""
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
        {/* LEFT: EXPLAINER PANEL */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col shadow-xl">
          <div className="mb-6">
            <span className="text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
              Step {stepIdx + 1} / {STEPS.length}
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-1 text-white">
              {activeStep.title}
            </h2>
            <h3 className="text-sm font-mono text-cyan-500 mb-4">
              {activeStep.subtitle}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {activeStep.desc}
            </p>
          </div>

          <div className="mt-auto pt-6 border-t border-slate-800">
            <div className="bg-black/30 p-3 rounded-lg font-mono text-xs text-slate-400">
              <span className="text-slate-600">TENSOR_OP:</span>
              <br />
              {activeStep.math}
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={prev}
              disabled={stepIdx === 0}
              className="px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 transition"
            >
              Back
            </button>
            <button
              onClick={next}
              className="flex-1 px-5 py-3 rounded-lg bg-cyan-700 hover:bg-cyan-600 text-white font-bold shadow-lg transition"
            >
              {stepIdx === STEPS.length - 1 ? "Restart" : "Next Operation"}
            </button>
          </div>
        </div>

        {/* RIGHT: DYNAMIC VISUALIZER */}
        <div className="lg:col-span-8 bg-black/80 border border-slate-800 rounded-2xl overflow-hidden relative flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              {activeStep.id === "input-raw" && <SketchInput />}
              {activeStep.id === "vit-patch" && <SketchPatching />}
              {activeStep.id === "vit-pos" && <SketchPosEmbed />}
              {activeStep.id === "vit-attn" && <SketchViTAttn />}
              {activeStep.id === "qformer-init" && <SketchQInit />}
              {activeStep.id === "qformer-self" && <SketchQSelf />}
              {activeStep.id === "qformer-cross" && <SketchQCross />}
              {activeStep.id === "llm-concat" && <SketchLLMFusion />}
              {activeStep.id === "llm-layers" && <SketchLLMLayers />}
              {activeStep.id === "llm-logits" && <SketchLogits />}
              {activeStep.id === "llm-softmax" && <SketchSoftmax />}
              {activeStep.id === "llm-reason" && <SketchGeneration />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/** ------------------------------------------------------------------
 * SKETCHES: The Visual Explanations
 * ------------------------------------------------------------------- */

// 1. INPUT
function SketchInput() {
  return (
    <div className="flex gap-8 items-center">
      <div className="relative group">
        <div className="w-48 h-48 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center overflow-hidden">
          <span className="text-6xl">👽</span>
        </div>
        <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
          Fake?
        </div>
      </div>
      <div className="text-4xl text-slate-600">+</div>
      <div className="w-48 p-4 bg-slate-100 text-slate-900 rounded-lg font-serif border-l-4 border-red-600 shadow-lg">
        <h4 className="font-bold text-red-700 uppercase text-xs mb-1">
          Breaking News
        </h4>
        <p className="text-sm font-bold leading-tight">
          "Alien spotted in NY!"
        </p>
      </div>
    </div>
  );
}

// 2. PATCHING
function SketchPatching() {
  return (
    <div className="w-64 h-64 bg-slate-900 relative border border-slate-600 rounded-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 grayscale">
        <span className="text-8xl">👽</span>
      </div>
      {/* Grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.03 }}
            className="border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-2 w-full text-center text-cyan-400 text-xs font-mono">
        16x16 Conv2d Stride
      </div>
    </div>
  );
}

// 3. POSITIONAL EMBEDDINGS
function SketchPosEmbed() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-16 h-16 bg-slate-800 border border-slate-600 rounded flex flex-col items-center justify-center relative"
          >
            {/* Patch Vector */}
            <div className="w-10 h-2 bg-blue-500 rounded-full mb-2" />

            {/* Position Overlay */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute inset-0 border-2 border-yellow-500/50 rounded flex items-center justify-center bg-yellow-500/10"
            >
              <span className="text-yellow-400 font-mono text-xs font-bold">
                P{i}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="text-xs text-slate-400">
        Vector Addition: <span className="text-blue-400">Content</span> +{" "}
        <span className="text-yellow-400">Location</span>
      </div>
    </div>
  );
}

// 4. VIT SELF ATTENTION
function SketchViTAttn() {
  return (
    <div className="relative w-64 h-64">
      {/* Nodes */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const x = 128 + Math.cos(angle) * 80 - 16; // center 128
        const y = 128 + Math.sin(angle) * 80 - 16;
        return (
          <div
            key={i}
            className="absolute w-8 h-8 bg-blue-600 rounded-full z-10 flex items-center justify-center text-xs border border-white"
            style={{ left: x, top: y }}
          >
            {i}
          </div>
        );
      })}

      {/* Connection Lines (The Attention) */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M 128 48 L 204 104"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M 128 48 L 204 180"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />
        <motion.path
          d="M 128 48 L 52 180"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* ... more lines conceptually ... */}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/80 px-2 py-1 text-xs text-blue-300 rounded backdrop-blur-sm">
          Global Context Mixing
        </div>
      </div>
    </div>
  );
}

// 5. Q-FORMER INIT
function SketchQInit() {
  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="w-16 h-24 bg-purple-900/20 border border-purple-500 rounded-lg flex flex-col items-center justify-center gap-2"
        >
          <div className="w-8 h-8 rounded-full border-2 border-purple-400 border-dashed animate-spin-slow" />
          <span className="text-[10px] text-purple-300">Query {i}</span>
        </motion.div>
      ))}
    </div>
  );
}

// 6. Q-FORMER SELF ATTENTION
function SketchQSelf() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-12 bg-purple-600 rounded-full z-10 relative shadow-[0_0_15px_#9333ea]"
          >
            <div className="absolute -top-2 -right-2 bg-white text-purple-900 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {i}
            </div>
          </div>
        ))}
      </div>
      {/* Arrows mixing */}
      <div className="h-16 w-full relative">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-0 left-[30%] w-2 h-2 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -100, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-4 right-[30%] w-2 h-2 bg-purple-400 rounded-full"
        />
        <div className="w-full border-b border-purple-500/30 mt-2" />
        <p className="text-center text-xs text-purple-400 mt-2">
          Information Sharing
        </p>
      </div>
    </div>
  );
}

// 7. Q-FORMER CROSS ATTENTION
function SketchQCross() {
  return (
    <div className="flex justify-between items-center w-full px-10">
      {/* Frozen Image */}
      <div className="flex flex-col gap-1 opacity-70">
        <span className="text-[10px] text-blue-400">Frozen ViT</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-8 h-4 bg-blue-600 rounded-sm" />
        ))}
      </div>

      {/* The Attention Scan */}
      <div className="flex-1 h-32 relative mx-4">
        <motion.div
          className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-[10px] text-white bg-black px-2">
          Extracting Features
        </div>
      </div>

      {/* Queries */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] text-purple-400">Queries</span>
        <div className="w-12 h-12 rounded-full border-2 border-purple-500 bg-purple-900/50 flex items-center justify-center text-xs">
          Q
        </div>
      </div>
    </div>
  );
}

// 8. FUSION
function SketchLLMFusion() {
  return (
    <div className="flex items-center gap-0.5">
      {/* Visual */}
      <div className="flex gap-0.5">
        <div className="w-6 h-12 bg-purple-600 rounded-l-md flex items-center justify-center text-[8px]">
          Q1
        </div>
        <div className="w-6 h-12 bg-purple-600 flex items-center justify-center text-[8px]">
          Q2
        </div>
        <div className="w-6 h-12 bg-purple-600 border-r-2 border-white flex items-center justify-center text-[8px]">
          Q32
        </div>
      </div>
      {/* Text */}
      <div className="flex gap-0.5">
        <div className="w-10 h-12 bg-orange-600 flex items-center justify-center text-[10px]">
          Is
        </div>
        <div className="w-10 h-12 bg-orange-600 flex items-center justify-center text-[10px]">
          this
        </div>
        <div className="w-10 h-12 bg-orange-600 rounded-r-md flex items-center justify-center text-[10px]">
          fake?
        </div>
      </div>
    </div>
  );
}

// 9. LLM LAYERS
function SketchLLMLayers() {
  return (
    <div className="w-48 flex flex-col-reverse gap-1">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="w-full h-6 bg-orange-800/50 border border-orange-600/30 rounded flex items-center justify-center"
        >
          <span className="text-[9px] text-orange-300">
            Layer {i + 1} (Self-Attn + MLP)
          </span>
        </motion.div>
      ))}
      <div className="text-center text-xs text-slate-500 mt-2">
        ...32 Layers Deep...
      </div>
    </div>
  );
}

// 10. LOGITS
function SketchLogits() {
  return (
    <div className="w-full h-48 flex items-end justify-center gap-2 px-8 border-b border-slate-700 pb-2 relative">
      {/* Bars */}
      <div className="w-8 h-10 bg-slate-700" title="apple"></div>
      <div className="w-8 h-24 bg-slate-700" title="the"></div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 140 }}
        className="w-8 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] relative group"
      >
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-green-400">
          FAKE
        </span>
      </motion.div>
      <div className="w-8 h-16 bg-slate-700" title="real"></div>
      <div className="w-8 h-8 bg-slate-700" title="maybe"></div>

      <div className="absolute top-4 right-4 text-xs text-slate-400 font-mono text-right">
        Vocab Size: 50k
        <br />
        Calculating Scores...
      </div>
    </div>
  );
}

// 11. SOFTMAX
function SketchSoftmax() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-mono">Exp(Logits) / Sum</div>
      <div className="text-xl">⬇</div>
      <div className="w-full max-w-sm bg-slate-800 rounded p-4">
        <div className="flex justify-between mb-2 text-sm">
          <span>"Real"</span>
          <span className="text-slate-400">1.2%</span>
        </div>
        <div className="w-full bg-slate-700 h-2 rounded mb-4">
          <div className="w-[1%] bg-slate-400 h-full rounded" />
        </div>

        <div className="flex justify-between mb-2 font-bold text-green-400 text-lg">
          <span>"FAKE"</span>
          <span>98.5%</span>
        </div>
        <div className="w-full bg-slate-700 h-4 rounded">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98.5%" }}
            className="bg-green-500 h-full rounded relative"
          >
            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 12. GENERATION
function SketchGeneration() {
  return (
    <div className="text-left font-mono max-w-md">
      <div className="text-slate-500 text-xs mb-2">Output Stream:</div>
      <span className="text-white text-lg">Verdict: </span>
      <span className="text-green-400 text-lg font-bold">FAKE</span>
      <br />
      <span className="text-white text-lg">Reason: </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-slate-300"
      >
        Inconsistent shadows on the subject compared to background lighting...
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-cyan-500 ml-1 align-middle"
      />
    </div>
  );
}
