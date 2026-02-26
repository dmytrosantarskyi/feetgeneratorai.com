'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Logo size={50} className="text-purple-400" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Feet Generator AI
                </span>
                <span className="text-xs text-slate-400">
                  Premium AI Image Generation
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Create hyper-realistic AI feet images instantly. Fast, private, and secure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="/#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Generator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  Contact Form
                </Link>
              </li>
              <li className="text-slate-400 text-sm">
                <span className="block">Support available 24/7</span>
                <span className="block mt-1">via contact form</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} Feet Generator AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-slate-500 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-slate-500 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
