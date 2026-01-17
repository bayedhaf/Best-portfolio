"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-w-screen bg-slate-950 justify-center items-center min-h-screen p-4 sm:p-8">
      <Card
        className="
          flex 
          flex-col             
          md:flex-row           
          bg-slate-950 
          text-white 
          items-center 
          justify-center 
          gap-8 
          md:gap-12 
          p-6 
          sm:p-10 
          w-full 
          max-w-6xl             /* prevents overflow */
        "
      >

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-center 
            md:text-left 
            text-base 
            sm:text-lg 
            md:text-xl 
            max-w-xs 
          "
        >
          Hello, I am Baye.
          <br />
          Welcome to my portfolio website.
        </motion.div>

        {/* animated image */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1.05, 1],
            rotate: [-30, 30, -60, 360],
            borderRadius: ["12%", "18%", "25%", "12%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay:2,
          }}
          style={box}
          className="overflow-hidden"
        >
          <Image
            src="/bb.jpg"
            alt="my photo"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>

      </Card>
    </main>
  )
}

const box = {
  width: 250, // smaller default for mobile
  height: 250,
  backgroundColor: "#eee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}
