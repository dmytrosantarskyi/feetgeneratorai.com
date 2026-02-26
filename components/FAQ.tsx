'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can I create unlimited images?',
    answer: 'You can start with a preview generation to test our generator. For unlimited high-resolution images without watermarks, upgrade to our premium plan through our partner platform. Click the "Unlock High-Res" button to get started with unlimited generations.',
  },
  {
    question: 'How does the generator work?',
    answer: 'Our generator uses advanced DALL-E 3 technology to create images. You provide a detailed text description, and our AI processes your request to generate high-quality images. The system typically processes requests in 10-30 seconds, depending on server load and image complexity.',
  },
  {
    question: 'How fast does the generator process images?',
    answer: 'Our advanced generator typically processes and generates images in 10-30 seconds. The speed depends on server load and image complexity, but we\'ve optimized our system to deliver results as quickly as possible while maintaining the highest quality standards.',
  },
  {
    question: 'Can I customize poses and angles?',
    answer: 'Absolutely! Our generator allows you to fully customize your images through detailed prompts. You can specify poses, angles, lighting, backgrounds, nail polish colors, accessories, and more. The more detailed your prompt, the more accurate the AI-generated result will be.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
          >
            <span className="font-semibold text-white pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-5 flex items-center justify-center"
            >
              <span className="text-purple-400 text-xl">▼</span>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-slate-300 border-t border-slate-800">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
