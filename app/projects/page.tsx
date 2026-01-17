"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React from "react"

/* =========================
   MAIN COMPONENT
========================= */
export default function ScrollTriggered() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">

        {/* ===== Animated Intro Text ===== */}
        <SectionIntro />

        {/* ===== Cards ===== */}
        {projects.map(([text, img, hueA, hueB, link_url], i) => (
          <Card
            key={i}
            text={text}
            image={img}
            hueA={hueA}
            hueB={hueB}
            link_url={link_url}
          />
        ))}
      </div>
    </div>
  )
}

/* =========================
   INTRO SECTION
========================= */
function SectionIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="md:col-span-3 text-center max-w-3xl"
    >
      <motion.h1
        initial={{ letterSpacing: "0.5em", opacity: 0 }}
        animate={{ letterSpacing: "0.08em", opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-amber-200 mb-6"
      >
        Project Showcase
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-slate-300 text-base md:text-lg leading-relaxed"
      >
        The cards below present interactive prototypes that demonstrate modern
        UI design, core functionality, and key system features. Each project
        includes a live demo or direct access to its GitHub repository.
      </motion.p>
    </motion.div>
  )
}

/* =========================
   CARD COMPONENT
========================= */
interface CardProps {
  text: string
  image: string
  hueA: number
  hueB: number
  link_url: string
}

function Card({ text, image, hueA, hueB, link_url }: CardProps) {
  const background = `linear-gradient(306deg, ${h(hueA)}, ${h(hueB)})`

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: true }}
      className="relative"
    >
      <div style={{ ...splash, background }} />

      <motion.div
        style={card}
        variants={cardVariants}
        whileHover={{ scale: 1.04, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <p style={textStyle}>{text}</p>

        <Image
          src={image}
          alt={text}
          width={400}
          height={260}
          className="rounded-lg object-cover"
        />

        <Link href={link_url} target="_blank">
          <button style={demoBtn}>
            See Demo
          </button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

/* =========================
   ANIMATIONS
========================= */
const cardVariants: Variants = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -6,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },
}

const h = (h: number) => `hsl(${h}, 100%, 50%)`

/* =========================
   STYLES
========================= */
const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

const splash: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
  width: 300,
  height: 430,
  background: "#ffffff",
  borderRadius: 20,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  boxShadow: "0 40px 90px rgba(0,0,0,.25)",
}

const textStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#1f2937",
  fontWeight: 500,
  lineHeight: 1.5,
}

const demoBtn: React.CSSProperties = {
  padding: "10px 16px",
  background: "#0f172a",
  color: "#fff",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
}

/* =========================
   DATA
========================= */
const projects: [string, string, number, number, string][] = [
  [
    "Agritech Platform – optimized farm management with IoT analytics.",
    "/farm.png",
    340,
    10,
    "https://agritech-et.me",
  ],
  [
    "Hostnate – property hosting platform connecting workers and employers.",
    "/hot.png",
    0,
    60,
    "https://host-net.vercel.app/",
  ],
  [
    "Employee Performance Evaluation System (ASTU).",
    "/dsh.png",
    60,
    90,
    "https://performance-evaluation-kappa.vercel.app/auth/login",
  ],
  [
    "Fitness tracking application with wearable device integration.",
    "/marketplac.png",
    220,
    290,
    "https://github.com/bayedhaf/Fitness-tracker-web-App",
  ],
]
