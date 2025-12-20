"use client" // <-- this needs to be the very first line in the file

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import React from "react"

export default function ScrollTriggered() {
  return (
    <div className="min-w-screen bg-slate-950 max-w-[1100px] mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
      {projects.map(([text, img, hueA, hueB], i) => (
        <Card key={i} text={text} image={img} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  )
}

interface CardProps {
  text: string
  image: string
  hueA: number
  hueB: number
}

function Card({ text, image, hueA, hueB }: CardProps) {
  const background = `linear-gradient(306deg, ${h(hueA)}, ${h(hueB)})`

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      className="relative"
    >
      {/* splash background */}
      <div style={{ ...splash, background }} />

      <motion.div style={card} variants={cardVariants}>
        <p style={textStyle}>{text}</p>
        <Image
          src={image}
          alt={text}
          width={300}
          height={200}
          className="object-cover"
        />
        <button style={demoBtn} className="mb-20 bg-slate-800">
          See Demo
        </button>
      </motion.div>
    </motion.div>
  )
}

const cardVariants: Variants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}

const h = (h: number) => `hsl(${h}, 100%, 50%)`

// card outer container
const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 20,
}

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
  width: 300,
  height: 430,
  background: "#fff",
  borderRadius: 20,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  boxShadow: "0 40px 100px rgba(0,0,0,.2)",
}

const textStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#222",
  fontWeight: 500,
  lineHeight: 1.4,
}

const demoBtn: React.CSSProperties = {
  padding: "8px 14px",
  background: "#1A1B2F",
  color: "#fff",
  borderRadius: 10,
  border: "none",
  cursor: "pointer",
}

// project list
const projects: [string, string, number, number][] = [
  [
    "Agritech Platform – optimized farm management + IoT analytics.",
    "/farm.png",
    340,
    10,
  ],
  ["Hostnate property hosting & rental automation.", "/hot.png", 0, 60],
  ["Fitness tracking with wearable integration.", "/dsh.png", 60, 90],
  ["AI chat customer support & automation", "/marketplace.png", 220, 290],
]
