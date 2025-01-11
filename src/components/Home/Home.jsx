'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    "Innovate",
    "Create",
    "Transform",
    "Elevate",
    "Inspire"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [phrases.length])

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex flex-col justify-center items-center relative">
          <div className="relative z-10 text-center">
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We {phrases[currentPhrase]}
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your partner in digital excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/service" className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300">
                Start Your Journey
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Redefining Digital Experiences</h2>
            <p className="text-lg sm:text-xl mb-12">We blend creativity with technology to deliver cutting-edge solutions that drive your business forward.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <motion.div 
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">Innovative Design</h3>
                <p>Crafting visually stunning and user-centric experiences</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">Robust Development</h3>
                <p>Building scalable and high-performance digital solutions</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">Strategic Marketing</h3>
                <p>Driving growth through data-driven digital strategies</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Let us Create Something Extraordinary</h2>
            <p className="text-lg sm:text-xl mb-12">Join hands with us to turn your digital dreams into reality. We are not just service providers; we are your partners in innovation.</p>
            <a href="/contact" className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300 mt-8">
              Start Your Project
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
