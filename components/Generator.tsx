'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Generator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [hasGenerated, setHasGenerated] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setProgress(0)
    setGeneratedImage(null)

    // Simulate progress
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
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to generate image')
      }

      const data = await response.json()
      clearInterval(progressInterval)
      setProgress(100)
      setGeneratedImage(data.imageUrl)
      setHasGenerated(true)
    } catch (error: any) {
      console.error('Error generating image:', error)
      clearInterval(progressInterval)
      setProgress(0)
      
      // Show user-friendly error message
      const errorMessage = error.message || 'Failed to generate image. Please try again with a different description.'
      alert(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleUnlock = () => {
    // Redirect to homepage
    window.location.href = '/'
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
