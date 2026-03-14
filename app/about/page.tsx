"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-black flex items-center justify-center px-6 py-10">

      <Card className="relative w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center md:text-left gap-6 max-w-lg"
        >

          <h1 className="text-3xl text-red-200 md:text-5xl font-bold leading-tight">
            Hello, I'm{" "}
            <span className="text-indigo-400">
              Bayisa
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            AI-Powered Full-Stack Developer passionate about building
            intelligent web applications, RAG systems, and modern digital
            platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

           <Link href='/projects' className="w-max">
            <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold shadow-lg">
              View Projects
            </button>
           </Link>

            <button className="px-6 py-3 text-gray-300 rounded-xl hover:text-white border border-white/20 hover:bg-white/10 transition">
              Contact Me
            </button>

          </div>

        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >

          {/* glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-40" />

          {/* image container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

            <Image
              src="/bb.jpg"
              alt="Bayisa"
              fill
              className="object-cover"
              priority
            />

          </div>

        </motion.div>

      </Card>
    </main>
  )
}