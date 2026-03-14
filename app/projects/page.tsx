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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 py-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">

        <SectionIntro />

        {projects.map(([text, img, hueA, hueB, link], i) => (
          <Card
            key={i}
            text={text}
            image={img}
            hueA={hueA}
            hueB={hueB}
            link_url={link}
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .9 }}
      viewport={{ once: true }}
      className="md:col-span-3 text-center max-w-3xl"
    >

      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.4em" }}
        animate={{ opacity: 1, letterSpacing: "0.08em" }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Featured Projects
      </motion.h1>

      <p className="text-slate-400 text-lg leading-relaxed">
        A curated collection of modern applications demonstrating full-stack
        engineering, AI integrations, and scalable user interfaces.
      </p>

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

  const background = `linear-gradient(135deg, ${h(hueA)}, ${h(hueB)})`

  return (

    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: .5 }}
      className="group relative"
    >

      {/* gradient glow */}
      <div
        style={{ ...glow, background }}
        className="opacity-50 group-hover:opacity-80 transition"
      />

      <motion.div
        style={card}
        variants={cardVariants}
        whileHover={{ y: -10, rotate: 0, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      >

        <Image
          src={image}
          alt={text}
          width={400}
          height={260}
          className="rounded-xl object-cover h-40 w-full transition duration-500 group-hover:scale-110"
        />

        <p style={textStyle}>
          {text}
        </p>

        <Link href={link_url} target="_blank">

          <button className="mt-3 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition shadow-lg">
            View Demo
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

  offscreen: {
    y: 120,
    opacity: 0,
  },

  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 0.8,
    },
  },

}

const h = (h: number) => `hsl(${h}, 80%, 55%)`

/* =========================
STYLES
========================= */

const cardContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}

const glow: React.CSSProperties = {
  position: "absolute",
  inset: "-20px",
  filter: "blur(60px)",
  borderRadius: 30,
}

const card: React.CSSProperties = {
  width: 300,
  height: 380,
  background: "rgba(255,255,255,0.95)",
  borderRadius: 20,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "center",
  boxShadow: "0 40px 80px rgba(0,0,0,.35)",
  backdropFilter: "blur(8px)",
}

const textStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#1f2937",
  fontWeight: 500,
  lineHeight: 1.6,
  marginTop: 10,
}

/* =========================
PROJECT DATA
========================= */

const projects: [string, string, number, number, string][] = [

  [
    "Agritech-ET — AI platform connecting farmers with agricultural insights.",
    "/farm.png",
    200,
    260,
    "https://agritech-et.me",
  ],

  [
    "HostNet — modern hosting platform for connecting property owners and clients.",
    "/hot.png",
    10,
    50,
    "https://host-net.vercel.app/",
  ],

  [
    "Employee Performance Evaluation System used for ASTU staff assessment.",
    "/dsh.png",
    40,
    80,
    "https://performance-evaluation-kappa.vercel.app/auth/login",
  ],

  [
    "Fitness tracker application for recording workouts and monitoring progress.",
    "/marketplac.png",
    260,
    320,
    "https://github.com/bayedhaf/Fitness-tracker-web-App",
  ],

]