"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Image,
  FileText,
  Zap,
  XCircle,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationStep, setAnimationStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation control
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isPlaying && currentSlide === 4) {
      interval = setInterval(() => {
        setAnimationStep((prev) => {
          if (prev >= 9) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const resetAnimation = () => {
    setAnimationStep(0);
    setIsPlaying(false);
  };

  const slides = [
    // Slide 1: Title
    {
      title: "CLIP",
      subtitle:
        "Contrastive Language-Image Pre-training for Fake News Detection",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="text-6xl">🖼️📝</div>
          <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            CLIP
          </h1>
          <p className="text-2xl text-gray-600 text-center">
            Contrastive Language-Image Pre-training
          </p>
          <p className="text-lg text-gray-500 text-center max-w-2xl">
            Connecting vision and language through contrastive learning
          </p>
          <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg mt-4">
            <p className="text-center text-gray-700">
              <span className="font-bold">By OpenAI (2021)</span> - A
              revolutionary approach to multimodal understanding
            </p>
          </div>
        </div>
      ),
    },

    // Slide 2: Problem Definition
    {
      title: "The Problem",
      subtitle: "Limitations of traditional vision-language models",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">
                  Traditional Models Struggle with Flexibility
                </h3>
                <p className="text-gray-700">
                  Previous vision-language models were trained on fixed
                  categories and couldn't generalize to new concepts or detect
                  nuanced mismatches
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">
                Traditional Computer Vision Issues
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Requires labeled datasets for specific categories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Can't understand arbitrary text descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Poor zero-shot capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Expensive to retrain for new categories</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">
                For Fake News Detection
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚠</span>
                  <span>Can't detect arbitrary image-text mismatches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚠</span>
                  <span>Needs retraining for new fake news patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚠</span>
                  <span>Limited semantic understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚠</span>
                  <span>Can't compare images to complex claims</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-lg mb-3 text-purple-900">
              The Core Challenge
            </h4>
            <p className="text-gray-700 mb-3">
              How do we create a model that can:
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-purple-800 mb-2">
                  Understand ANY text
                </p>
                <p className="text-sm text-gray-600">
                  Not just predefined labels
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-purple-800 mb-2">
                  Match with ANY image
                </p>
                <p className="text-sm text-gray-600">
                  Without specific training
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="font-semibold text-purple-800 mb-2">
                  Detect mismatches
                </p>
                <p className="text-sm text-gray-600">
                  Even for unseen scenarios
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
            <p className="text-center text-gray-800 font-semibold">
              We need a model that learns a shared embedding space where images
              and text can be directly compared
            </p>
          </div>
        </div>
      ),
    },

    // Slide 3: The Solution
    {
      title: "The Solution: CLIP",
      subtitle: "Learning visual concepts from natural language supervision",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Revolutionary Approach
                </h3>
                <p className="text-gray-700">
                  CLIP learns to match images with their text descriptions by
                  training on 400 million image-text pairs from the internet,
                  creating a shared embedding space
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-lg mb-4 text-blue-900 flex items-center">
                <Image className="w-6 h-6 mr-2" />
                Image Encoder
              </h4>
              <p className="text-gray-700 mb-3">
                Converts images into vector embeddings
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Architecture:</span> Vision
                  Transformer (ViT) or ResNet
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Output:</span> 512 or
                  768-dimensional vector
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-lg mb-4 text-green-900 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Text Encoder
              </h4>
              <p className="text-gray-700 mb-3">
                Converts text into vector embeddings
              </p>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Architecture:</span>{" "}
                  Transformer (similar to GPT)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <span className="font-semibold">Output:</span> Same
                  dimensional vector as image
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-lg mb-4 text-center text-purple-900">
              The Key Innovation: Contrastive Learning
            </h4>
            <div className="bg-white p-5 rounded-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="bg-green-100 p-3 rounded-lg mb-2">
                    <p className="font-bold text-green-800">Matching Pairs</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Pull image and its text close together in embedding space
                  </p>
                </div>
                <div>
                  <div className="bg-red-100 p-3 rounded-lg mb-2">
                    <p className="font-bold text-red-800">Non-matching Pairs</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Push unrelated images and texts apart
                  </p>
                </div>
                <div>
                  <div className="bg-blue-100 p-3 rounded-lg mb-2">
                    <p className="font-bold text-blue-800">Result</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Shared space where similarity = relevance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              For Fake News Detection
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">
                  ✓ Zero-shot Detection
                </p>
                <p className="text-sm text-gray-600">
                  Can detect mismatches without specific training on fake news
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">
                  ✓ Flexible Comparison
                </p>
                <p className="text-sm text-gray-600">
                  Compare images to arbitrary claims or headlines
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">
                  ✓ Semantic Understanding
                </p>
                <p className="text-sm text-gray-600">
                  Understands meaning, not just keywords
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">✓ Efficient</p>
                <p className="text-sm text-gray-600">
                  Fast similarity computation using embeddings
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 4: Architecture
    {
      title: "CLIP Architecture",
      subtitle: "Dual encoder design with contrastive learning",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
              Complete Architecture Overview
            </h3>

            <div className="grid grid-cols-2 gap-8 mb-6">
              {/* Image Path */}
              <div className="space-y-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
                  <Image className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold text-lg">Image Path</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">
                    1. Image Input
                  </p>
                  <p className="text-sm text-gray-600">
                    224×224 or 336×336 pixels
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-500">↓</div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">
                    2. Image Encoder
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Vision Transformer (ViT-L/14) or ResNet-50
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Splits image into patches</li>
                    <li>• Applies transformer layers</li>
                    <li>• Extracts visual features</li>
                  </ul>
                </div>

                <div className="text-center text-2xl text-blue-500">↓</div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">
                    3. Linear Projection
                  </p>
                  <p className="text-sm text-gray-600">
                    Projects to embedding space (512D or 768D)
                  </p>
                </div>

                <div className="text-center text-2xl text-blue-500">↓</div>

                <div className="bg-blue-100 p-4 rounded-lg shadow border-2 border-blue-300">
                  <p className="font-semibold text-blue-900 mb-2">
                    4. L2 Normalization
                  </p>
                  <p className="text-sm text-gray-600">
                    Normalized image embedding vector
                  </p>
                </div>
              </div>

              {/* Text Path */}
              <div className="space-y-4">
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold text-lg">Text Path</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-green-200">
                  <p className="font-semibold text-green-900 mb-2">
                    1. Text Input
                  </p>
                  <p className="text-sm text-gray-600">
                    Up to 77 tokens (BPE encoded)
                  </p>
                </div>

                <div className="text-center text-2xl text-green-500">↓</div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-green-200">
                  <p className="font-semibold text-green-900 mb-2">
                    2. Text Encoder
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    Transformer (12 layers, 512D width)
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Token + position embeddings</li>
                    <li>• Multi-head self-attention</li>
                    <li>• Feed-forward layers</li>
                  </ul>
                </div>

                <div className="text-center text-2xl text-green-500">↓</div>

                <div className="bg-white p-4 rounded-lg shadow border-2 border-green-200">
                  <p className="font-semibold text-green-900 mb-2">
                    3. Linear Projection
                  </p>
                  <p className="text-sm text-gray-600">
                    Projects to same embedding space
                  </p>
                </div>

                <div className="text-center text-2xl text-green-500">↓</div>

                <div className="bg-green-100 p-4 rounded-lg shadow border-2 border-green-300">
                  <p className="font-semibold text-green-900 mb-2">
                    4. L2 Normalization
                  </p>
                  <p className="text-sm text-gray-600">
                    Normalized text embedding vector
                  </p>
                </div>
              </div>
            </div>

            {/* Similarity Computation */}
            <div className="bg-purple-500 text-white p-4 rounded-lg text-center">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <p className="font-bold text-lg">Cosine Similarity Computation</p>
              <p className="text-sm mt-2">
                Dot product of normalized embeddings = similarity score (-1 to
                +1)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border-2 border-blue-200">
              <h4 className="font-bold mb-3 text-blue-900">
                Image Encoder Options
              </h4>
              <p className="text-sm text-gray-700 mb-2">ResNet-50/101</p>
              <p className="text-xs text-gray-600 mb-3">
                Traditional CNN architecture
              </p>
              <p className="text-sm text-gray-700 mb-2">
                ViT-B/32, ViT-B/16, ViT-L/14
              </p>
              <p className="text-xs text-gray-600">
                Vision Transformer variants
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border-2 border-green-200">
              <h4 className="font-bold mb-3 text-green-900">
                Text Encoder Details
              </h4>
              <p className="text-sm text-gray-700 mb-2">63M parameters</p>
              <p className="text-xs text-gray-600 mb-3">
                Transformer architecture
              </p>
              <p className="text-sm text-gray-700 mb-2">BPE tokenization</p>
              <p className="text-xs text-gray-600">49,152 vocabulary size</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border-2 border-purple-200">
              <h4 className="font-bold mb-3 text-purple-900">Training Data</h4>
              <p className="text-sm text-gray-700 mb-2">
                400M image-text pairs
              </p>
              <p className="text-xs text-gray-600 mb-3">
                Collected from internet
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Natural language supervision
              </p>
              <p className="text-xs text-gray-600">No manual labels needed</p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5: Animated Execution
    {
      title: "CLIP in Action: Live Execution",
      subtitle: "Watch how CLIP processes a fake news example step-by-step",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 p-5 rounded-lg">
            <h3 className="font-bold text-red-900 mb-3 text-lg">
              Fake News Example
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">🖼️ Image</p>
                <p className="text-sm text-gray-700">
                  Photo of a crowded beach with people
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">📝 Headline</p>
                <p className="text-sm text-gray-700">
                  "Empty beaches show citizens following lockdown orders"
                </p>
              </div>
            </div>
          </div>

          {/* Animation Controls */}
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
            <button
              onClick={resetAnimation}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset</span>
            </button>
            <div className="text-gray-700 font-semibold">
              Step {animationStep} / 9
            </div>
          </div>

          {/* Animation Visualization */}
          <div className="grid grid-cols-2 gap-6">
            {/* Image Path */}
            <div className="space-y-3">
              <div
                className={`bg-blue-500 text-white p-3 rounded-lg text-center transition-all duration-500 ${
                  animationStep >= 1
                    ? "opacity-100 scale-100"
                    : "opacity-30 scale-95"
                }`}
              >
                <p className="font-bold">IMAGE PROCESSING</p>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 1
                    ? "border-blue-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-blue-900 mb-2">
                  Step 1: Input Image
                </p>
                <div className="bg-blue-50 p-3 rounded text-center">
                  <div className="text-4xl mb-2">🏖️👥👥👥</div>
                  <p className="text-sm text-gray-600">Crowded beach scene</p>
                  <p className="text-xs text-gray-500 mt-1">
                    224×224 pixels, RGB
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 2
                    ? "border-blue-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-blue-900 mb-2">
                  Step 2: Patch Embedding
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="grid grid-cols-4 gap-1 mb-2">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-6 bg-blue-300 rounded transition-all ${
                          animationStep >= 2 ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    Image split into 196 patches (14×14)
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 3
                    ? "border-blue-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-blue-900 mb-2">
                  Step 3: Vision Transformer
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="space-y-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((layer) => (
                      <div
                        key={layer}
                        className={`flex items-center space-x-2 transition-all duration-300 ${
                          animationStep >= 3 && layer <= (animationStep - 2) * 2
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                      >
                        <div className="w-16 text-xs text-gray-600">
                          Layer {layer}
                        </div>
                        <div className="flex-1 h-2 bg-blue-400 rounded"></div>
                        <div className="text-xs text-gray-600">✓</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Processing visual features...
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 4
                    ? "border-blue-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-blue-900 mb-2">
                  Step 4: Image Embedding
                </p>
                <div className="bg-blue-50 p-3 rounded">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 bg-gradient-to-t from-blue-600 to-blue-300 rounded transition-all ${
                          animationStep >= 4
                            ? "h-12 opacity-100"
                            : "h-0 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${i * 30}ms`,
                          height: `${Math.random() * 40 + 20}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    512-dimensional vector
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Values: [0.23, -0.45, 0.67, ...]
                  </p>
                </div>
              </div>
            </div>

            {/* Text Path */}
            <div className="space-y-3">
              <div
                className={`bg-green-500 text-white p-3 rounded-lg text-center transition-all duration-500 ${
                  animationStep >= 5
                    ? "opacity-100 scale-100"
                    : "opacity-30 scale-95"
                }`}
              >
                <p className="font-bold">TEXT PROCESSING</p>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 5
                    ? "border-green-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-green-900 mb-2">
                  Step 5: Input Text
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    "Empty beaches show citizens following lockdown orders"
                  </p>
                  <p className="text-xs text-gray-500">Text length: 9 words</p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 6
                    ? "border-green-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-green-900 mb-2">
                  Step 6: Tokenization
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {[
                      "Empty",
                      "beaches",
                      "show",
                      "citizens",
                      "following",
                      "lockdown",
                      "orders",
                    ].map((token, i) => (
                      <div
                        key={i}
                        className={`px-2 py-1 bg-green-300 rounded text-xs transition-all ${
                          animationStep >= 6
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-0"
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        {token}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    BPE tokens: 9 + special tokens
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 7
                    ? "border-green-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-green-900 mb-2">
                  Step 7: Text Transformer
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <div className="space-y-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((layer) => (
                      <div
                        key={layer}
                        className={`flex items-center space-x-2 transition-all duration-300 ${
                          animationStep >= 7 && layer <= (animationStep - 6) * 3
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                      >
                        <div className="w-16 text-xs text-gray-600">
                          Layer {layer}
                        </div>
                        <div className="flex-1 h-2 bg-green-400 rounded"></div>
                        <div className="text-xs text-gray-600">✓</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Processing semantic meaning...
                  </p>
                </div>
              </div>

              <div
                className={`bg-white p-4 rounded-lg shadow border-2 transition-all duration-500 ${
                  animationStep >= 8
                    ? "border-green-500 scale-100"
                    : "border-gray-200 scale-95 opacity-50"
                }`}
              >
                <p className="font-semibold text-green-900 mb-2">
                  Step 8: Text Embedding
                </p>
                <div className="bg-green-50 p-3 rounded">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 bg-gradient-to-t from-green-600 to-green-300 rounded transition-all ${
                          animationStep >= 8
                            ? "h-12 opacity-100"
                            : "h-0 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${i * 30}ms`,
                          height: `${Math.random() * 40 + 20}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    512-dimensional vector
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Values: [-0.12, 0.89, -0.34, ...]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Similarity Computation */}
          <div
            className={`bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300 transition-all duration-500 ${
              animationStep >= 9
                ? "opacity-100 scale-100"
                : "opacity-50 scale-95"
            }`}
          >
            <div className="text-center mb-4">
              <Zap className="w-12 h-12 mx-auto text-purple-600 mb-2" />
              <p className="font-bold text-xl text-purple-900">
                Step 9: Similarity Computation
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Image Embedding
                </p>
                <div className="text-2xl mb-2">🏖️</div>
                <p className="text-xs text-gray-600">
                  [Crowded beach features]
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-3xl text-purple-600">×</div>
              </div>

              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Text Embedding
                </p>
                <div className="text-2xl mb-2">📝</div>
                <p className="text-xs text-gray-600">[Empty beach concept]</p>
              </div>
            </div>

            <div
              className={`bg-white p-5 rounded-lg shadow-lg border-2 transition-all duration-500 ${
                animationStep >= 9 ? "border-red-500" : "border-gray-200"
              }`}
            >
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Cosine Similarity Score
                </p>
                <div
                  className={`text-5xl font-bold mb-3 transition-all duration-1000 ${
                    animationStep >= 9 ? "text-red-600" : "text-gray-300"
                  }`}
                >
                  {animationStep >= 9 ? "-0.68" : "0.00"}
                </div>
                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div
                    className={`absolute left-1/2 h-full bg-red-500 transition-all duration-1000`}
                    style={{
                      width: animationStep >= 9 ? "34%" : "0%",
                      transform: "translateX(-100%)",
                    }}
                  ></div>
                  <div className="absolute left-1/2 w-0.5 h-full bg-gray-400"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mb-4">
                  <span>-1.0 (Opposite)</span>
                  <span>0.0 (Unrelated)</span>
                  <span>+1.0 (Similar)</span>
                </div>

                <div
                  className={`p-4 rounded-lg transition-all duration-500 ${
                    animationStep >= 9
                      ? "bg-red-50 border-2 border-red-500"
                      : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`font-bold mb-2 transition-all ${
                      animationStep >= 9
                        ? "text-red-800 text-lg"
                        : "text-gray-400"
                    }`}
                  >
                    {animationStep >= 9
                      ? "⚠️ FAKE NEWS DETECTED!"
                      : "Computing..."}
                  </p>
                  {animationStep >= 9 && (
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• Image shows CROWDED beach</p>
                      <p>• Text claims EMPTY beaches</p>
                      <p>• Strong semantic contradiction (-0.68)</p>
                      <p className="text-red-700 font-semibold mt-2">
                        Verdict: Image-text mismatch detected
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6: How CLIP Works - Training
    {
      title: "How CLIP Works",
      subtitle: "Training process and contrastive learning",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
              Contrastive Learning Training Process
            </h3>

            <div className="bg-white p-5 rounded-lg shadow-md mb-4">
              <h4 className="font-bold text-lg text-purple-900 mb-3">
                Training Batch Example (N=4)
              </h4>
              <div className="grid grid-cols-4 gap-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="text-3xl mb-2">🐕</div>
                  <p className="text-xs text-gray-700 font-semibold">Image 1</p>
                  <p className="text-xs text-gray-600">"A dog playing"</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <p className="text-xs text-gray-700 font-semibold">Image 2</p>
                  <p className="text-xs text-gray-600">"Red car on road"</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg text-center">
                  <div className="text-3xl mb-2">🌳</div>
                  <p className="text-xs text-gray-700 font-semibold">Image 3</p>
                  <p className="text-xs text-gray-600">"Tree in forest"</p>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg text-center">
                  <div className="text-3xl mb-2">🍕</div>
                  <p className="text-xs text-gray-700 font-semibold">Image 4</p>
                  <p className="text-xs text-gray-600">"Pizza on plate"</p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-semibold text-purple-900 mb-2">
                  Similarity Matrix (4×4)
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {/* Row 1 */}
                  <div className="bg-green-500 text-white p-2 rounded text-center text-xs font-bold">
                    0.95
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.05
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.12
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    -0.03
                  </div>

                  {/* Row 2 */}
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.08
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-center text-xs font-bold">
                    0.92
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.01
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.15
                  </div>

                  {/* Row 3 */}
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.11
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    -0.02
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-center text-xs font-bold">
                    0.89
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.07
                  </div>

                  {/* Row 4 */}
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.03
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.18
                  </div>
                  <div className="bg-red-200 text-gray-700 p-2 rounded text-center text-xs">
                    0.09
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-center text-xs font-bold">
                    0.94
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Green diagonal = matching pairs (maximize), Red off-diagonal =
                  non-matching pairs (minimize)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-300">
              <h4 className="font-bold text-lg text-green-900 mb-4">
                Training Objectives
              </h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 mb-1">
                    1. Maximize Diagonal
                  </p>
                  <p className="text-sm text-gray-600">
                    Make matching image-text pairs have high similarity (close
                    to +1)
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 mb-1">
                    2. Minimize Off-Diagonal
                  </p>
                  <p className="text-sm text-gray-600">
                    Make non-matching pairs have low similarity (close to 0 or
                    -1)
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800 mb-1">
                    3. Symmetric Loss
                  </p>
                  <p className="text-sm text-gray-600">
                    Train both image→text and text→image directions
                    simultaneously
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-300">
              <h4 className="font-bold text-lg text-blue-900 mb-4">
                Training Details
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-1">
                    Dataset Size
                  </p>
                  <p className="text-sm text-gray-600">
                    400 million image-text pairs from the internet
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-1">Batch Size</p>
                  <p className="text-sm text-gray-600">
                    32,768 pairs per batch
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-1">
                    Training Time
                  </p>
                  <p className="text-sm text-gray-600">
                    ~2 weeks on 256 V100 GPUs
                  </p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-semibold text-blue-800 mb-1">
                    Loss Function
                  </p>
                  <p className="text-sm text-gray-600">
                    InfoNCE (Contrastive Loss)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold text-lg text-purple-900 mb-4 text-center">
              Why This Works for Fake News Detection
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-purple-800 mb-2">
                  Semantic Understanding
                </p>
                <p className="text-sm text-gray-600">
                  CLIP learns deep semantic relationships, not just keyword
                  matching
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-purple-800 mb-2">
                  Zero-Shot Transfer
                </p>
                <p className="text-sm text-gray-600">
                  Can detect mismatches without specific fake news training
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-purple-800 mb-2">
                  Robust Embeddings
                </p>
                <p className="text-sm text-gray-600">
                  Trained on diverse internet data, handles many scenarios
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7: Disadvantages
    {
      title: "Disadvantages & Limitations",
      subtitle: "Challenges and constraints of CLIP",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-red-50 p-5 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">
                    Limited Fine-Grained Understanding
                  </h4>
                  <p className="text-sm text-gray-700">
                    Struggles with counting objects, understanding spatial
                    relationships, and detecting subtle details in images
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">
                    No Causal Understanding
                  </h4>
                  <p className="text-sm text-gray-700">
                    Cannot reason about cause-and-effect or temporal sequences,
                    making it weak at detecting misleading context
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">
                    Biased Training Data
                  </h4>
                  <p className="text-sm text-gray-700">
                    Inherits biases from internet data including stereotypes,
                    cultural biases, and potentially harmful associations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">
                    Abstract Concepts
                  </h4>
                  <p className="text-sm text-gray-700">
                    Difficulty with abstract or metaphorical language that
                    doesn't have direct visual correspondence
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-yellow-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">
                    No External Knowledge
                  </h4>
                  <p className="text-sm text-gray-700">
                    Cannot access factual knowledge or current events, limiting
                    its ability to verify claims requiring world knowledge
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-yellow-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">
                    Computational Cost
                  </h4>
                  <p className="text-sm text-gray-700">
                    Large model size (ViT-L/14: 428M parameters) requires
                    significant GPU memory and processing power
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow border-l-4 border-pink-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-pink-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-pink-900 mb-2">
                    Text Length Limitation
                  </h4>
                  <p className="text-sm text-gray-700">
                    Maximum 77 tokens for text input, cannot process long
                    articles or detailed descriptions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow border-l-4 border-pink-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-pink-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-pink-900 mb-2">
                    Adversarial Vulnerability
                  </h4>
                  <p className="text-sm text-gray-700">
                    Can be fooled by adversarial examples and typographic
                    attacks (adding text to images)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-purple-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">
                    Context Dependency
                  </h4>
                  <p className="text-sm text-gray-700">
                    Same image can be real or fake depending on context, but
                    CLIP only sees image-caption pairs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-purple-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">
                    No Explainability
                  </h4>
                  <p className="text-sm text-gray-700">
                    Provides similarity scores but no explanation of why an
                    image-text pair matches or doesn't match
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-gray-300 p-5 rounded-lg">
            <h4 className="font-bold text-center text-gray-800 mb-4">
              Specific Limitations for Fake News Detection
            </h4>
            <div className="grid grid-cols-4 gap-3 text-sm">
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-semibold text-gray-700 mb-1">Satire</p>
                <p className="text-xs text-gray-600">
                  Cannot distinguish satire from fake news
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-semibold text-gray-700 mb-1">
                  Out-of-context
                </p>
                <p className="text-xs text-gray-600">
                  Real image with misleading caption is hard to detect
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-semibold text-gray-700 mb-1">Deepfakes</p>
                <p className="text-xs text-gray-600">
                  Cannot detect manipulated images if text matches
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg text-center">
                <p className="font-semibold text-gray-700 mb-1">
                  Fact-checking
                </p>
                <p className="text-xs text-gray-600">
                  Cannot verify factual accuracy of claims
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg">
            <p className="text-center text-gray-800">
              <span className="font-bold">Important:</span> CLIP is best used as
              one component in a multi-faceted fake news detection system rather
              than as a standalone solution
            </p>
          </div>
        </div>
      ),
    },

    // Slide 8: Summary
    {
      title: "Summary",
      subtitle: "Key takeaways about CLIP",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">
              CLIP: Bridging Vision and Language
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-2 border-green-300">
              <h4 className="font-bold text-lg text-green-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Strengths
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Powerful zero-shot learning capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>
                    Understands semantic relationships between images and text
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Trained on 400M diverse image-text pairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Efficient similarity computation via embeddings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>No task-specific training required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Dual encoder allows flexible comparisons</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg shadow-md border-2 border-red-300">
              <h4 className="font-bold text-lg text-red-900 mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Weaknesses
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Limited fine-grained visual understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>No causal or temporal reasoning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Cannot access external knowledge or facts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Inherits biases from training data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>77 token text limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>No explainability for decisions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <h4 className="font-bold text-lg text-center text-gray-800 mb-4">
              Core Innovation
            </h4>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-2">
                  <Image className="w-10 h-10 mx-auto text-blue-600" />
                </div>
                <p className="text-sm font-semibold">Image Encoder</p>
              </div>

              <div className="text-center">
                <div className="text-3xl text-purple-600">↔</div>
                <p className="text-xs text-purple-600 font-semibold mt-1">
                  Shared Space
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-2">
                  <FileText className="w-10 h-10 mx-auto text-green-600" />
                </div>
                <p className="text-sm font-semibold">Text Encoder</p>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Contrastive learning creates a unified embedding space where
              images and text can be directly compared
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 p-6 rounded-lg">
            <h4 className="font-bold text-center text-gray-800 mb-4">
              Use Cases for Fake News Detection
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">🔍</div>
                <p className="font-semibold text-gray-800 mb-1">
                  Image-Text Verification
                </p>
                <p className="text-xs text-gray-600">
                  Check if captions match images
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold text-gray-800 mb-1">
                  Zero-Shot Classification
                </p>
                <p className="text-xs text-gray-600">
                  Classify without specific training
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-semibold text-gray-800 mb-1">
                  Fast Similarity Search
                </p>
                <p className="text-xs text-gray-600">
                  Quickly find matching/mismatching pairs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-5 rounded-lg">
            <p className="text-center text-lg font-semibold">
              CLIP revolutionized multimodal learning by learning from natural
              language supervision at scale, making it a powerful tool for
              detecting image-text inconsistencies in fake news
            </p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      if (currentSlide + 1 !== 4) {
        resetAnimation();
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      if (currentSlide - 1 !== 4) {
        resetAnimation();
      }
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-sm text-blue-100">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">{slides[currentSlide].content}</div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-gray-300 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-semibold">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (index !== 4) resetAnimation();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
