"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Code, TrendingUp } from "lucide-react";
export default function Home() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = ["Innovate", "Create", "Transform", "Elevate", "Inspire"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [phrases.length])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="bg-gradient-to-r from-[#780206] to-[#061161] text-white">
      <main className="relative pt-20">
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {/* <HeroAnimation /> */}
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 mt-16">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              We{" "}
              <AnimatePresence mode="wait">
                <motion.span key={currentPhrase} {...fadeInUp} transition={{ duration: 0.5, ease: "easeInOut" }}>
                  {phrases[currentPhrase]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              Empowering businesses through cutting-edge digital solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            >
              <a
                href="/service"
                className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 hover:shadow-[0px_0px_10px_2px] hover:shadow-white group transition duration-300 transform hover:-translate-y-1"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>
        </section>
        <hr/>
        <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-purple-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gray-900 md:pb-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Redefining Digital Experiences
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl mb-12 text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We blend creativity with technology to deliver cutting-edge solutions that drive your business forward.
              Our team of experts is dedicated to transforming your digital presence and accelerating your growth.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovative Design",
                  description:
                    "We craft visually stunning and user-centric experiences that captivate your audience and drive engagement.",
                  gradient: "from-purple-400 to-pink-500",
                  Icon: Monitor, // Use Monitor icon here
                },
                {
                  title: "Robust Development",
                  description:
                    "Our team builds scalable and high-performance digital solutions that stand the test of time and grow with your business.",
                  gradient: "from-blue-400 to-indigo-500",
                  Icon: Code, // Example icon for this section
                },
                {
                  title: "Strategic Marketing",
                  description:
                    "We drive growth through data-driven digital strategies, helping you reach and convert your target audience effectively.",
                  gradient: "from-green-400 to-cyan-500",
                  Icon: TrendingUp, // Example icon for this section
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg overflow-hidden relative bg-gray-900 text-white`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                  
                  <div className=" flex items-center gap-4 mb-4">
                    <service.Icon className="text-3xl text-white" />
                    <h3 className="text-xl font-bold mb-2 relative z-10">{service.title}</h3>
                  </div>
                  <p className="relative z-10">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <hr />

        <section className="py-20 sm:py-32 bg-gradient-to-b from-purple-100 to-white text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gray-900 pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Discovery",
                  description: "We dive deep into your business to understand your goals and challenges.",
                },
                {
                  title: "Strategy",
                  description: "Our experts craft a tailored plan to address your unique needs and objectives.",
                },
                {
                  title: "Execution",
                  description: "We bring your vision to life with precision, creativity, and technical excellence.",
                },
                {
                  title: "Optimization",
                  description: "We continuously refine and improve to ensure long-term success and growth.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-gradient-to-r from-[#780206] to-[#061161] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hands with us to turn your digital dreams into reality. We&apos;re not just service providers; we&apos;re your
              partners in innovation, committed to your success.
            </motion.p>
            <motion.a
              href="/contact"
              className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 hover:shadow-[0px_0px_10px_2px] hover:shadow-white group transition duration-300 transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </section>

        <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-purple-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gray-900 md:pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  quote:
                    "Working with this team has been a game-changer for our business. They delivered beyond our expectations!",
                  gradient: "from-purple-400 to-pink-500",
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Director, GrowthCo",
                  quote: "Their innovative approach and attention to detail set them apart. Highly recommended!",
                  gradient: "from-blue-500 to-indigo-600",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, EcoSolutions",
                  quote:
                    "From concept to execution, they've been an invaluable partner in our digital transformation journey.",
                  gradient: "from-green-400 to-lime-500",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg shadow-lg overflow-hidden relative bg-gray-900 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-10`}></div>
                  <p className="mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

