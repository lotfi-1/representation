'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, CheckCircle, Image, FileText, Zap, XCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "BLIP-2",
      subtitle: "Multimodal Fake News Detection Using Advanced Transformer Architecture",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="text-6xl">🔍📰</div>
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            BLIP-2
          </h1>
          <p className="text-2xl text-gray-600 text-center">
            Bootstrapping Language-Image Pre-training
          </p>
          <p className="text-lg text-gray-500 text-center max-w-2xl">
            A cutting-edge solution for detecting fake news by analyzing both images and text together
          </p>
        </div>
      )
    },
    
    // Slide 2: Problem Definition
    {
      title: "The Problem",
      subtitle: "Why we need multimodal fake news detection",
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="text-red-500 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Fake News is Multimodal</h3>
                <p className="text-gray-700">
                  Modern misinformation combines manipulated images with misleading text to create convincing fake stories
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Common Manipulation Tactics</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Old images reused with false context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Photoshopped images with fake captions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Real images paired with misleading headlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>AI-generated images presented as real</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Limitations of Single-Modal Detection</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✗</span>
                  <span>Text-only: Misses visual manipulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✗</span>
                  <span>Image-only: Ignores contextual meaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✗</span>
                  <span>Cannot detect cross-modal inconsistencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✗</span>
                  <span>Sophisticated fakes appear credible</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
            <p className="text-center text-gray-800 font-semibold">
              We need a system that understands BOTH images and text together to catch these sophisticated fakes
            </p>
          </div>
        </div>
      )
    },

    // Slide 3: The Solution
    {
      title: "The Solution: BLIP-2",
      subtitle: "A smart bridge between vision and language understanding",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-500 w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Key Innovation</h3>
                <p className="text-gray-700">
                  BLIP-2 uses a clever Q-Former component that acts as a translator between image understanding and language understanding models
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
              <Image className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <h4 className="font-bold mb-2 text-blue-900">Frozen Image Encoder</h4>
              <p className="text-sm text-gray-700">Processes images using pre-trained vision models</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200">
              <Zap className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <h4 className="font-bold mb-2 text-purple-900">Q-Former (Bridge)</h4>
              <p className="text-sm text-gray-700">Connects vision and language efficiently</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
              <FileText className="w-12 h-12 mx-auto mb-3 text-green-600" />
              <h4 className="font-bold mb-2 text-green-900">Frozen LLM</h4>
              <p className="text-sm text-gray-700">Understands language and generates predictions</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
            <h4 className="font-bold text-lg mb-4 text-gray-800">Why BLIP-2 is Perfect for Fake News Detection</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="flex items-start mb-2">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Detects image-text mismatches</span>
                </p>
                <p className="flex items-start mb-2">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Understands context in both modalities</span>
                </p>
              </div>
              <div>
                <p className="flex items-start mb-2">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">Efficient with frozen pre-trained models</span>
                </p>
                <p className="flex items-start mb-2">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">State-of-the-art performance</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Architecture Overview
    {
      title: "BLIP-2 Architecture",
      subtitle: "Three main components working together",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="flex items-center justify-between mb-6">
              <div className="text-center flex-1">
                <div className="bg-blue-500 text-white p-4 rounded-lg mb-2 mx-4">
                  <Image className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Image Encoder</p>
                  <p className="text-xs mt-1">Frozen ❄️</p>
                </div>
                <p className="text-sm text-gray-600">Extracts visual features</p>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              <div className="text-center flex-1">
                <div className="bg-purple-500 text-white p-4 rounded-lg mb-2 mx-4">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Q-Former</p>
                  <p className="text-xs mt-1">Trainable ⚡</p>
                </div>
                <p className="text-sm text-gray-600">Bridges vision & language</p>
              </div>

              <div className="text-2xl text-gray-400">→</div>

              <div className="text-center flex-1">
                <div className="bg-green-500 text-white p-4 rounded-lg mb-2 mx-4">
                  <FileText className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">Large LLM</p>
                  <p className="text-xs mt-1">Frozen ❄️</p>
                </div>
                <p className="text-sm text-gray-600">Generates predictions</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow border-2 border-blue-200">
              <h4 className="font-bold mb-3 text-blue-900">1. Image Encoder</h4>
              <p className="text-sm text-gray-700 mb-2">Uses ViT (Vision Transformer)</p>
              <p className="text-sm text-gray-600">Converts images into visual features without training</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border-2 border-purple-200">
              <h4 className="font-bold mb-3 text-purple-900">2. Q-Former</h4>
              <p className="text-sm text-gray-700 mb-2">Learnable query vectors</p>
              <p className="text-sm text-gray-600">Extracts most relevant visual information for text understanding</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow border-2 border-green-200">
              <h4 className="font-bold mb-3 text-green-900">3. Large LLM</h4>
              <p className="text-sm text-gray-700 mb-2">OPT or FlanT5</p>
              <p className="text-sm text-gray-600">Processes combined information and makes final decision</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-300 p-4 rounded-lg">
            <p className="text-center text-gray-800">
              <span className="font-bold">Key Insight:</span> Only Q-Former is trained, making BLIP-2 extremely efficient while leveraging powerful pre-trained models
            </p>
          </div>
        </div>
      )
    },

    // Slide 5: How Q-Former Works
    {
      title: "The Q-Former: The Heart of BLIP-2",
      subtitle: "How it bridges vision and language",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
            <h3 className="text-xl font-bold text-purple-900 mb-3">What is Q-Former?</h3>
            <p className="text-gray-700">
              Q-Former is a lightweight transformer that uses learnable query tokens to extract visual features that are most relevant for language understanding
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-4 text-gray-800">Input Side</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900">Learnable Queries</p>
                  <p className="text-sm text-gray-600">32 special tokens that "ask questions" about the image</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900">Image Features</p>
                  <p className="text-sm text-gray-600">From frozen image encoder</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-900">Text (Optional)</p>
                  <p className="text-sm text-gray-600">News headline or caption</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
              <h4 className="font-bold text-lg mb-4 text-gray-800">Processing</h4>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900">Self-Attention</p>
                  <p className="text-sm text-gray-600">Queries interact with each other</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900">Cross-Attention</p>
                  <p className="text-sm text-gray-600">Queries extract info from image features</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold text-purple-900">Text Processing</p>
                  <p className="text-sm text-gray-600">Understands relationship between text and image</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-5 rounded-lg border-2 border-purple-300">
            <h4 className="font-bold mb-3 text-center text-gray-800">Q-Former Training Objectives</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold text-purple-900">Image-Text Matching</p>
                <p className="text-sm text-gray-600 mt-1">Does the text match the image?</p>
              </div>
              <div>
                <p className="font-semibold text-purple-900">Image-Text Contrastive</p>
                <p className="text-sm text-gray-600 mt-1">Learn aligned representations</p>
              </div>
              <div>
                <p className="font-semibold text-purple-900">Image-Grounded Text</p>
                <p className="text-sm text-gray-600 mt-1">Generate text based on image</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Example Walkthrough
    {
      title: "Example: Detecting Fake News",
      subtitle: "Step-by-step from input to output",
      content: (
        <div className="space-y-5">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h3 className="font-bold text-red-900 mb-2">Fake News Example</h3>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Image:</span> A forest fire</p>
            <p className="text-gray-700"><span className="font-semibold">Text:</span> "Breaking: Massive wildfire in Australia destroys entire city - December 2024"</p>
            <p className="text-sm text-red-600 mt-2 italic">Reality: The image is from a 2020 California fire, reused with false context</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Image Encoding</h4>
                  <p className="text-sm text-gray-600">The frozen Vision Transformer processes the forest fire image and extracts 257 visual feature vectors representing different parts of the image (flames, smoke, trees, sky, etc.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Q-Former Processing</h4>
                  <p className="text-sm text-gray-600 mb-2">32 learnable query tokens "interrogate" the image features through cross-attention, asking questions like:</p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• What type of vegetation is burning?</li>
                    <li>• What is the landscape terrain?</li>
                    <li>• Are there buildings visible?</li>
                    <li>• What season does this appear to be?</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">Simultaneously, it processes the text headline and learns the alignment between visual content and textual claims</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-indigo-500">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Feature Alignment</h4>
                  <p className="text-sm text-gray-600">Q-Former compresses 257 image features into 32 compact representations that capture the most relevant visual information for understanding the text claim</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
              <div className="flex items-start space-x-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">LLM Analysis</h4>
                  <p className="text-sm text-gray-600">The frozen LLM receives the 32 visual features plus the text headline and analyzes for inconsistencies, detecting that the vegetation type, terrain, and seasonal indicators don't match the claimed Australian location and December timeframe</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Final Output</h4>
                  <p className="text-sm font-bold text-red-600 mb-1">FAKE NEWS DETECTED (Confidence: 92%)</p>
                  <p className="text-sm text-gray-600">Reasoning: Visual features indicate North American landscape characteristics inconsistent with Australian terrain. No urban structures visible despite claim of "entire city destroyed"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Training Process
    {
      title: "How BLIP-2 is Trained",
      subtitle: "Two-stage efficient training approach",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Two-Stage Training Strategy</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md border-2 border-blue-300">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-blue-900">Vision-Language Pre-training</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">Train Q-Former to understand image-text relationships</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">• Uses large datasets of image-caption pairs</p>
                  <p className="text-gray-600">• Learns three objectives simultaneously</p>
                  <p className="text-gray-600">• Image encoder stays frozen</p>
                  <p className="text-gray-600">• Duration: Several days on multiple GPUs</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-md border-2 border-purple-300">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-purple-900">Vision-to-Language Generative Training</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">Connect Q-Former outputs to frozen LLM</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">• Teaches LLM to understand visual features</p>
                  <p className="text-gray-600">• Q-Former learns to format features for LLM</p>
                  <p className="text-gray-600">• All other components stay frozen</p>
                  <p className="text-gray-600">• Duration: Much faster than stage 1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
            <h4 className="font-bold text-lg mb-4 text-gray-800">For Fake News Detection: Fine-tuning</h4>
            <p className="text-gray-700 mb-4">After the two-stage pre-training, we fine-tune BLIP-2 specifically for fake news detection:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">Training Data</p>
                <p className="text-sm text-gray-600">Labeled dataset of real and fake news articles with images</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">What We Train</p>
                <p className="text-sm text-gray-600">Only Q-Former and a small classification head</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">Task</p>
                <p className="text-sm text-gray-600">Binary classification: Real vs Fake</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-900 mb-2">Duration</p>
                <p className="text-sm text-gray-600">Few hours to days depending on dataset size</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg">
            <p className="text-center text-gray-800">
              <span className="font-bold">Efficiency Advantage:</span> By keeping 90% of parameters frozen, BLIP-2 trains much faster and requires less computational resources than training from scratch
            </p>
          </div>
        </div>
      )
    },

    // Slide 8: Disadvantages
    {
      title: "Disadvantages & Limitations",
      subtitle: "Challenges and areas for improvement",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-red-50 p-5 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Computational Requirements</h4>
                  <p className="text-sm text-gray-700">Requires significant GPU memory due to frozen large models, making deployment challenging on resource-constrained devices</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-5 rounded-lg shadow border-l-4 border-red-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Inference Speed</h4>
                  <p className="text-sm text-gray-700">Slower than smaller models due to processing through multiple large frozen components, which may not be suitable for real-time detection</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Limited Interpretability</h4>
                  <p className="text-sm text-gray-700">Like most deep learning models, it's difficult to understand exactly why the model makes specific decisions, which is problematic for trust and transparency</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-orange-500 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Training Data Dependency</h4>
                  <p className="text-sm text-gray-700">Performance heavily depends on the quality and diversity of fake news training data, which is constantly evolving and hard to obtain</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-yellow-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Bias and Fairness Issues</h4>
                  <p className="text-sm text-gray-700">May inherit biases from pre-training data, potentially leading to unfair predictions across different demographics, topics, or sources</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-lg shadow border-l-4 border-yellow-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-yellow-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">Sophisticated Manipulation</h4>
                  <p className="text-sm text-gray-700">May struggle with highly sophisticated deepfakes or subtle manipulations where image-text alignment appears natural but content is still false</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow border-l-4 border-pink-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-pink-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-pink-900 mb-2">Context Understanding</h4>
                  <p className="text-sm text-gray-700">Lacks real-world knowledge and temporal context, making it difficult to verify claims requiring external knowledge or current events understanding</p>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg shadow border-l-4 border-pink-500">
              <div className="flex items-start space-x-3">
                <XCircle className="text-pink-600 w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-pink-900 mb-2">Adversarial Vulnerability</h4>
                  <p className="text-sm text-gray-700">Susceptible to adversarial attacks where malicious actors can craft inputs specifically designed to fool the model</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-gray-300 p-5 rounded-lg">
            <h4 className="font-bold text-center text-gray-800 mb-3">Practical Deployment Challenges</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="font-semibold text-gray-700">Storage</p>
                <p className="text-gray-600">Model size: Several GB</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Cost</p>
                <p className="text-gray-600">High inference costs at scale</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-700">Updates</p>
                <p className="text-gray-600">Difficult to update for new fake news patterns</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-300 p-4 rounded-lg">
            <p className="text-center text-gray-800">
              <span className="font-bold">Important Note:</span> Despite these limitations, BLIP-2 remains one of the most effective approaches for multimodal fake news detection, offering a strong balance between performance and efficiency
            </p>
          </div>
        </div>
      )
    },

    // Slide 9: Summary
    {
      title: "Summary",
      subtitle: "Key takeaways about BLIP-2",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-4">BLIP-2: A Powerful Solution for Fake News Detection</h3>
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
                  <span>Effective multimodal understanding of images and text</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Efficient training with frozen pre-trained models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>State-of-the-art performance on vision-language tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Innovative Q-Former architecture bridges modalities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Detects image-text inconsistencies effectively</span>
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
                  <span>High computational and memory requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Slow inference speed for real-time applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Limited interpretability of decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Vulnerable to adversarial attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Lacks external knowledge and temporal context</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-300">
            <h4 className="font-bold text-lg text-center text-gray-800 mb-4">Core Architecture Components</h4>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 mb-2">
                  <Image className="w-8 h-8 mx-auto text-blue-600" />
                </div>
                <p className="text-sm font-semibold">Frozen Image Encoder</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 mb-2">
                  <Zap className="w-8 h-8 mx-auto text-purple-600" />
                </div>
                <p className="text-sm font-semibold">Q-Former (Trainable)</p>
              </div>
              <div className="text-2xl text-gray-400">→</div>
              <div className="text-center">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 mb-2">
                  <FileText className="w-8 h-8 mx-auto text-green-600" />
                </div>
                <p className="text-sm font-semibold">Frozen LLM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300 p-5 rounded-lg">
            <p className="text-center text-gray-800 text-lg">
              <span className="font-bold">Bottom Line:</span> BLIP-2 represents a cutting-edge approach to multimodal fake news detection, balancing powerful capabilities with practical efficiency through its innovative architecture
            </p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-sm text-blue-100">{slides[currentSlide].subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-gray-300 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
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
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
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
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
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