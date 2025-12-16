'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Target, TrendingDown, CheckCircle, Sparkles } from 'lucide-react';

export default function ChatbotTrainingSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const slides = [
    // Slide 1: Title
    {
      id: 'title',
      background: 'from-indigo-600 via-purple-600 to-pink-600',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-white">
          <Sparkles className="mb-8 animate-pulse" size={80} />
          <h1 className="text-7xl font-black mb-6 text-center leading-tight">
            Conversational Chatbot
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text">
              Training Report
            </span>
          </h1>
          <div className="w-32 h-2 bg-white/30 rounded-full mb-8"></div>
          <p className="text-3xl font-light text-white/90">
            Fine-tuning DistilGPT2 on DialogSum Dataset
          </p>
          <div className="flex gap-6 mt-12">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40">
              <span className="text-xl font-semibold">✓ Training Complete</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40">
              <span className="text-xl font-semibold">77.11 minutes</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/40">
              <span className="text-xl font-semibold">9,000 steps</span>
            </div>
          </div>
        </div>
      )
    },
    
    // Slide 2: Dataset
    {
      id: 'dataset',
      background: 'from-blue-600 to-cyan-600',
      content: (
        <div className="flex flex-col h-full text-white p-16 overflow-y-auto">
          <div className="flex items-center gap-4 mb-12">
            <Database size={60} className="text-cyan-300" />
            <h2 className="text-6xl font-black">Dataset Definition</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-cyan-200">DialogSum Dataset</h3>
              <div className="space-y-4 text-xl">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-cyan-300 rounded-full"></span>
                  <span><strong>12,460</strong> conversational dialogues</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-cyan-300 rounded-full"></span>
                  <span><strong>8,000</strong> samples used for training</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-cyan-300 rounded-full"></span>
                  <span>Natural dialogue exchanges</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-cyan-300 rounded-full"></span>
                  <span>Tokenized to <strong>256</strong> max length</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-yellow-300">Preprocessing Pipeline</h3>
              <div className="space-y-5 text-lg">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="font-semibold text-yellow-200 mb-2">Step 1: Format Dialogues</p>
                  <p className="text-white/90">Replace newlines with EOS tokens</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="font-semibold text-yellow-200 mb-2">Step 2: Tokenization</p>
                  <p className="text-white/90">Padding to max length of 256 tokens</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                  <p className="font-semibold text-yellow-200 mb-2">Step 3: Label Creation</p>
                  <p className="text-white/90">Copy input IDs for causal LM training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Methodology
    {
      id: 'methodology',
      background: 'from-green-600 to-emerald-600',
      content: (
        <div className="flex flex-col h-full text-white p-16 overflow-y-auto">
          <div className="flex items-center gap-4 mb-12">
            <Target size={60} className="text-emerald-300" />
            <h2 className="text-6xl font-black">Why This Methodology?</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 backdrop-blur-md rounded-3xl p-8 border-2 border-emerald-300/50">
                <h3 className="text-3xl font-bold mb-6 text-emerald-200">Model Selection</h3>
                <div className="text-2xl font-black text-emerald-100 mb-4">DistilGPT2</div>
                <ul className="space-y-3 text-lg">
                  <li>✓ Lightweight (82M parameters)</li>
                  <li>✓ Fast GPU training</li>
                  <li>✓ Proven conversational AI</li>
                  <li>✓ Memory efficient</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 backdrop-blur-md rounded-3xl p-8 border-2 border-yellow-300/50">
                <h3 className="text-3xl font-bold mb-6 text-yellow-200">Time Management</h3>
                <ul className="space-y-3 text-lg">
                  <li>⏱️ 90-minute hard limit</li>
                  <li>📊 Dynamic step calculation</li>
                  <li>🛑 Emergency stop at 5min</li>
                  <li>💾 Periodic checkpointing</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8 text-center text-emerald-200">Training Optimizations</h3>
              
              <div className="grid grid-cols-2 gap-6 text-lg">
                <div>
                  <p className="font-bold text-emerald-300 mb-3 text-xl">Hardware</p>
                  <ul className="space-y-2">
                    <li>• FP16 mixed precision</li>
                    <li>• Gradient checkpointing</li>
                    <li>• Batch size: 8</li>
                    <li>• 2 parallel workers</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-emerald-300 mb-3 text-xl">Strategy</p>
                  <ul className="space-y-2">
                    <li>• LR: 5e-5</li>
                    <li>• Weight decay: 0.01</li>
                    <li>• Warmup: 100 steps</li>
                    <li>• Step-based training</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-white/30">
                <p className="text-center text-xl leading-relaxed text-white/90">
                  Balancing <strong className="text-emerald-300">quality</strong> with <strong className="text-emerald-300">speed</strong>
                  <br />under strict time constraints
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Results
    {
      id: 'results',
      background: 'from-orange-600 to-red-600',
      content: (
        <div className="flex flex-col h-full text-white p-16 overflow-y-auto">
          <div className="flex items-center gap-4 mb-12">
            <TrendingDown size={60} className="text-orange-300" />
            <h2 className="text-6xl font-black">Training Results</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500/40 to-blue-700/40 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-300/50 text-center">
              <div className="text-xl font-medium text-blue-200 mb-2">Initial Loss</div>
              <div className="text-7xl font-black text-white mb-2">1.72</div>
              <div className="text-lg text-blue-300">Step 50</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/40 to-green-700/40 backdrop-blur-md rounded-3xl p-8 border-2 border-green-300/50 text-center">
              <div className="text-xl font-medium text-green-200 mb-2">Final Loss</div>
              <div className="text-7xl font-black text-white mb-2">0.92</div>
              <div className="text-lg text-green-300">Step 9000</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/40 to-purple-700/40 backdrop-blur-md rounded-3xl p-8 border-2 border-purple-300/50 text-center">
              <div className="text-xl font-medium text-purple-200 mb-2">Improvement</div>
              <div className="text-7xl font-black text-white mb-2">46.5%</div>
              <div className="text-lg text-purple-300">Loss Reduction</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30">
              <h3 className="text-3xl font-bold mb-6 text-orange-200">Performance Metrics</h3>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center">
                  <span>Training Steps</span>
                  <span className="font-black text-2xl">9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Epochs Completed</span>
                  <span className="font-black text-2xl">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Training Duration</span>
                  <span className="font-black text-2xl">77.11 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg Step Time</span>
                  <span className="font-black text-2xl">~0.51 sec</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hardware</span>
                  <span className="font-black text-2xl">CUDA GPU</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30">
              <h3 className="text-3xl font-bold mb-6 text-yellow-200">Loss Progression</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 text-xl font-bold">Step 1K</div>
                  <div className="flex-1 bg-white/20 h-6 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-full rounded-full" style={{width: '64%'}}></div>
                  </div>
                  <div className="w-20 text-xl font-bold text-right">1.10</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-xl font-bold">Step 3K</div>
                  <div className="flex-1 bg-white/20 h-6 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style={{width: '59%'}}></div>
                  </div>
                  <div className="w-20 text-xl font-bold text-right">1.01</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-xl font-bold">Step 5K</div>
                  <div className="flex-1 bg-white/20 h-6 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full rounded-full" style={{width: '56%'}}></div>
                  </div>
                  <div className="w-20 text-xl font-bold text-right">0.97</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-xl font-bold">Step 7K</div>
                  <div className="flex-1 bg-white/20 h-6 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-full rounded-full" style={{width: '55%'}}></div>
                  </div>
                  <div className="w-20 text-xl font-bold text-right">0.95</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-xl font-bold">Step 9K</div>
                  <div className="flex-1 bg-white/20 h-6 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full" style={{width: '54%'}}></div>
                  </div>
                  <div className="w-20 text-xl font-bold text-right">0.92</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Conclusion
    {
      id: 'conclusion',
      background: 'from-purple-600 via-violet-600 to-indigo-600',
      content: (
        <div className="flex flex-col h-full text-white p-16 overflow-y-auto">
          <div className="flex items-center gap-4 mb-12">
            <CheckCircle size={60} className="text-green-400" />
            <h2 className="text-6xl font-black">Conclusion</h2>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 mb-8">
              <p className="text-3xl leading-relaxed text-center font-light">
                Successfully fine-tuned DistilGPT2 model achieving
                <span className="font-black text-green-400 text-4xl"> 46.5% loss reduction</span>,
                demonstrating effective learning of dialogue patterns within
                <span className="font-black text-blue-400 text-4xl"> 90-minute </span>
                time constraint.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-500/30 to-green-700/30 backdrop-blur-md rounded-3xl p-8 border-2 border-green-300/50">
                <h3 className="text-3xl font-bold mb-6 text-green-200">✓ Key Achievements</h3>
                <ul className="space-y-3 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span>9,000 steps in 77.11 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span>Stable, consistent loss reduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span>Complete model artifacts saved</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 text-2xl">✓</span>
                    <span>Robust time management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/30 to-blue-700/30 backdrop-blur-md rounded-3xl p-8 border-2 border-blue-300/50">
                <h3 className="text-3xl font-bold mb-6 text-blue-200">→ Future Steps</h3>
                <ul className="space-y-3 text-xl">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">→</span>
                    <span>Extended training epochs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">→</span>
                    <span>Test set evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">→</span>
                    <span>Quality metrics implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 text-2xl">→</span>
                    <span>Domain-specific fine-tuning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-slate-900"
    >
      {/* Slide Content */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background} transition-all duration-500`}>
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div 
        className={`absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 z-10 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}

        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 border-2 border-white/40"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-16 h-4 bg-white'
                  : 'w-4 h-4 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 border-2 border-white/40"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Slide Counter */}
      <div 
        className={`absolute top-8 right-8 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-xl font-bold border-2 border-white/40 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}