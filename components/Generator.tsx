'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GENERATION_IMAGES = [
  '/generation/1.jpg',
  '/generation/2.jpg',
  '/generation/3.jpg',
  '/generation/4.jpg',
  '/generation/5.jpg',
  '/generation/6.jpg',
  '/generation/7.jpg',
  '/generation/8.jpg',
  '/generation/9.jpg',
  '/generation/10.jpg',
  '/generation/11.jpg',
  '/generation/12.jpg',
  '/generation/13.jpg',
  '/generation/14.jpg',
  '/generation/15.jpg',
  '/generation/16.jpg',
  '/generation/17.jpg',
]

const STORAGE_KEY = 'feetgen_has_generated'
const REFERRAL_URL = 'https://example.com/affiliate'

export default function Generator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [hasGenerated, setHasGenerated] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasGenerated(localStorage.getItem(STORAGE_KEY) === 'true')
    }
  }, [])

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    // Second time - redirect to referral immediately
    if (hasGenerated) {
      window.location.href = REFERRAL_URL
      return
    }

    setIsGenerating(true)
    setProgress(0)
    setGeneratedImage(null)

    // Simulate progress (same timing as before ~10 seconds)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return 90
        }
        return prev + 10
      })
    }, 300)

    try {
      // Simulate network delay (~8-10 seconds total)
      await new Promise((resolve) => setTimeout(resolve, 8000))

      clearInterval(progressInterval)
      setProgress(100)

      // Pick random image from generation folder
      const randomImage = GENERATION_IMAGES[Math.floor(Math.random() * GENERATION_IMAGES.length)]
      setGeneratedImage(randomImage)
      setHasGenerated(true)
      localStorage.setItem(STORAGE_KEY, 'true')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleUnlock = () => {
    window.location.href = REFERRAL_URL
  }

  // Already generated before - show CTA to referral
  if (hasGenerated && !generatedImage && !isGenerating) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">AI Feet Generator</h3>
            </div>
            <p className="text-slate-300">
              You have already used your free generation. Get unlimited access below.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnlock}
              className="w-full py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-2xl shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse-slow"
            >
              <span>Get Unlimited Generations - Click Here</span>
            </motion.button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="space-y-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">AI Feet Generator</h3>
          </div>

          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the feet image you want to generate... (e.g., 'elegant feet with red nail polish on white background')"
              className="w-full h-32 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              disabled={isGenerating || hasGenerated}
            />

            {!hasGenerated ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <span>Generating...</span>
                ) : (
                  <span>Generate AI Feet Image</span>
                )}
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUnlock}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg rounded-lg shadow-2xl shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-slow"
              >
                <span>Get Unlimited Generations - Click Here</span>
              </motion.button>
            )}
          </div>

          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="text-slate-400 text-sm">
                <span>Connecting to AI server...</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          )}

          {generatedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative mt-6"
            >
              <div className="relative rounded-lg overflow-hidden border border-slate-700">
                <img
                  src={generatedImage}
                  alt="Generated AI feet"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
