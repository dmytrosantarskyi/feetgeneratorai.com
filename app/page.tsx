'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Generator from '@/components/Generator'
import FAQ from '@/components/FAQ'
import { useEffect } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  useEffect(() => {
    // Set canonical link for homepage
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://feetgeneratorai.com'
    const canonicalLink = document.querySelector("link[rel='canonical']")
    
    if (canonicalLink) {
      canonicalLink.setAttribute('href', siteUrl)
    } else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = siteUrl
      document.head.appendChild(link)
    }
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-slate-950" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-purple-300">Powered by DALL-E 3</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight"
                >
                  <span className="block text-white">Feet AI</span>
                  <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                    Generator
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl sm:text-2xl text-slate-300 leading-relaxed"
                >
                  Fast & Private Image Creation
                </motion.p>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg text-slate-400 leading-relaxed max-w-xl"
              >
                Create stunning, hyper-realistic AI feet images in seconds. 
                Experience the most advanced feet pic generator powered by cutting-edge AI technology.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-3"
              >
                <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
                  <span className="text-sm text-slate-300">Instant Generation</span>
                </div>
                <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
                  <span className="text-sm text-slate-300">Private & Secure</span>
                </div>
                <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
                  <span className="text-sm text-slate-300">High Quality</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="pt-4"
              >
                <motion.a
                  href="#generator"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-purple-500/50 transition-all duration-300"
                >
                  <span>Start Generating Now</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Generator */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              id="generator"
              className="relative"
            >
              {/* Glow Effect Behind Generator */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
              
              <div className="relative">
                <Generator />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What Is an AI Feet Generator? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-purple-300">Technology Overview</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  What Is an AI Feet Generator?
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                An AI feet generator is an advanced artificial intelligence tool that uses deep learning algorithms, 
                specifically trained on millions of high-quality images, to create hyper-realistic feet pictures from text descriptions.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Our platform leverages state-of-the-art DALL-E 3 technology to produce images that are virtually indistinguishable 
                from professional photography. Whether you need images for creative projects, reference materials, or specific visual 
                content, our generator delivers stunning results with complete customization control.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-purple-400 mb-1">DALL-E 3</div>
                  <div className="text-sm text-slate-400">Latest AI Model</div>
                </div>
                <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400 mb-1">4K Quality</div>
                  <div className="text-sm text-slate-400">High Resolution</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl" />
                
                {/* Central Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Floating Cards */}
                <motion.div
                  className="absolute top-10 left-10 bg-slate-900/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-purple-400/20">
                    <div className="text-4xl">🎨</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">AI Art</div>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 right-10 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-400/20">
                    <div className="text-4xl">⚡</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Fast</div>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-10 left-1/4 bg-slate-900/80 backdrop-blur-md border border-purple-500/30 rounded-xl p-4 shadow-xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-purple-400/20">
                    <div className="text-4xl">✨</div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Quality</div>
                </motion.div>
                
                {/* Center Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl border-2 border-purple-400/30 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="text-6xl">🤖</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Example Generations
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              See the quality and variety of images our AI generator can create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, path: '/foot/1.jpg' },
              { id: 2, path: '/foot/2.jpg' },
              { id: 3, path: '/foot/3.jpg' },
              { id: 4, path: '/foot/4.jpg' },
              { id: 5, path: '/foot/5.jpg' },
              { id: 6, path: '/foot/6.jpg' },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.path}
                    alt={`AI Generated feet image example ${item.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white text-sm font-medium">AI Generated Image</div>
                    <div className="text-slate-300 text-xs mt-1">High Resolution • Custom Style</div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-purple-600/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Preview
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#generator"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-purple-500/50 transition-all duration-300"
            >
              Generate Your Own Images
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Finding High-Quality AI Sexy Feet Images Takes Time */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/15 to-blue-900/15" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Finding High-Quality Images Takes Time
                </span>
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                Searching for the perfect feet images online is frustrating and time-consuming. Stock photo websites offer limited, 
                generic options that rarely match your specific vision. Traditional photo generation requires expensive equipment, 
                professional models, and extensive post-production work. Even when you find suitable images, licensing fees can be 
                prohibitive, and the images often lack the exact style, angle, or aesthetic you need. Our generator solves 
                all these problems by giving you instant access to unlimited, customizable, high-quality images generated in 
                seconds—no expensive equipment, no licensing headaches, no compromise on quality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* We Provide The Most Advanced Feet AI Generator Online */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                We Provide The Most Advanced Generator Online
              </span>
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              Our platform stands out as the premier destination for AI-generated images. We've integrated the latest DALL-E 3 
              technology, ensuring that every image you create meets professional photography standards. Unlike other generators 
              that produce low-resolution, unrealistic results, our platform delivers 4K-quality images with perfect lighting, 
              natural textures, and photorealistic details. Our system processes requests in seconds, offers complete privacy with 
              secure data handling, and provides unlimited customization options.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
                <p className="text-slate-200">Powered by DALL-E 3, the most advanced image generation model available.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-slate-200">Generate professional-quality images in 10-30 seconds, not hours.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Create AI Sexy Feet With Hyper-Realistic Detail */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-blue-900/15" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Create Images With Hyper-Realistic Detail
                </span>
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                Every image generated by our platform features breathtaking realism that captures the subtle nuances of 
                professional photography. Our AI understands complex lighting scenarios, creating natural shadows and highlights that 
                enhance depth and dimension. Skin textures appear authentic, with realistic pores, veins, and natural variations in 
                tone. The generator excels at rendering fine details like nail polish finishes, jewelry, fabric textures, and 
                environmental elements. Whether you need soft, diffused lighting for an elegant aesthetic or dramatic, high-contrast 
                lighting for artistic impact, our generator adapts to your creative vision, producing results that rival—and often 
                exceed—traditional photography.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-purple-900/30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Ready to Create Stunning Images?
                </span>
              </motion.h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Start generating hyper-realistic AI images now. Experience the power of advanced AI technology.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.a
                  href="#generator"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg rounded-xl shadow-2xl shadow-purple-500/50 transition-all duration-300 inline-block"
                >
                  Start Generating Now
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-purple-500/50 text-white font-semibold text-lg rounded-xl transition-all duration-300 inline-block"
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Our AI Feet Tool Is Different */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Why Our Tool Is Different
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Fast</h3>
                <p className="text-slate-300">Generate images in seconds, not hours. No waiting, no delays.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Private</h3>
                <p className="text-slate-300">Your prompts and images remain completely confidential.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">High-Res</h3>
                <p className="text-slate-300">4K quality images with professional-grade detail and clarity.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">Unlimited</h3>
                <p className="text-slate-300">Create as many images as you need with premium access.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How our feet pic generator Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              How Our Generator Works
            </h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Enter Your Prompt</h3>
                  <p className="text-slate-300 text-lg">
                    Type a detailed description of the image you want to create. Be specific about poses, angles, 
                    lighting, colors, and any other details. The more descriptive your prompt, the better the results.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">AI Processes Your Request</h3>
                  <p className="text-slate-300 text-lg">
                    Our advanced DALL-E 3 AI engine analyzes your prompt and generates a hyper-realistic image. 
                    Watch the progress bar as our AI creates your custom image in real-time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Download or Unlock Premium</h3>
                  <p className="text-slate-300 text-lg">
                    View your generated image with a watermark preview. Click "Unlock High-Res" to access the full-resolution, 
                    watermark-free version and get unlimited generations through our premium partner platform.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This AI Feet Generator For? */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Who Is This Generator For?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Digital Artists & Creators</h3>
                <p className="text-slate-300">
                  Perfect for artists who need reference images, concept art, or creative inspiration without the cost 
                  and complexity of traditional photo shoots.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Content Creators</h3>
                <p className="text-slate-300">
                  Ideal for bloggers, social media managers, and content creators who need high-quality, customizable 
                  images for their projects without licensing restrictions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Reference Seekers</h3>
                <p className="text-slate-300">
                  Great for anyone needing specific angles, poses, or styles for research, design work, or educational purposes.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Niche Markets</h3>
                <p className="text-slate-300">
                  Tailored for specialized markets that require custom, high-quality imagery with complete creative control 
                  and privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Stunning Images?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start generating hyper-realistic images now.
            </p>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-purple-500/50 transition-all duration-200"
            >
              <span>Try the Generator Now</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
