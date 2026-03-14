"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import {
  Github,
  Linkedin,
  Facebook,
  Send,
  Phone,
  Mail,
  Sparkles,
  Brain,
  Code2,
  Database,
  Cpu,
  Rocket,
  ExternalLink,
  ChevronRight,
  Terminal,
  Globe,
  Zap,
  Server,
  Cloud,
  Users,
  Star,
  ThumbsUp,
  Award
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

import { useIsMobile } from "@/app/hooks/use-mobile"

/* =========================
COLOR THEME - Enhanced
========================= */
const colors = {
  primary: {
    from: "#6366f1", // indigo-500
    to: "#a855f7",   // purple-500
  },
  text: {
    primary: "#ffffff",    // Pure white
    secondary: "#e2e8f0",  // slate-200
    muted: "#cbd5e1",      // slate-300
    accent: "#818cf8",     // indigo-400
  },
  background: {
    primary: "#0f172a",    // slate-900
    secondary: "#1e293b",  // slate-800
    tertiary: "#334155",   // slate-700
  },
  button: {
    primary: "from-indigo-600 to-purple-600",
    primaryHover: "from-indigo-500 to-purple-500",
    secondary: "from-slate-700 to-slate-600",
    secondaryHover: "from-slate-600 to-slate-500",
    success: "from-green-600 to-emerald-600",
    successHover: "from-green-500 to-emerald-500",
  }
}

/* =========================
ANIMATIONS
========================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
}

const stagger: Variants = {
  show: {
    transition: { staggerChildren: 0.1 }
  }
}

/* =========================
SKILLS DATA
========================= */

const skills = [
  {
    title: "AI & RAG Systems",
    desc: "Building intelligent AI apps using LangChain, vector databases and LLM APIs.",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10"
  },
  {
    title: "Next.js Development",
    desc: "Modern full-stack applications using React, TypeScript and serverless APIs.",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Backend Engineering",
    desc: "Scalable APIs with Node.js, Python FastAPI and authentication systems.",
    icon: <Server className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10"
  },
  {
    title: "Database Systems",
    desc: "MongoDB, PostgreSQL, Firebase and vector databases.",
    icon: <Database className="w-5 h-5" />,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10"
  },
  {
    title: "AI Integration",
    desc: "OpenAI, Gemini, HuggingFace model integration.",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10"
  },
  {
    title: "Deployment",
    desc: "CI/CD pipelines and deployments using Vercel and Docker.",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10"
  }
]

/* =========================
PROJECTS DATA - Enhanced
========================= */

const projects = [
  {
    id: "Agritech-ET",
    img: "/farm.png",
    href: "https://agritech-et.me",
    desc: "AI-enhanced agricultural platform helping Ethiopian farmers access market information.",
    tags: ["Next.js", "AI", "Agriculture"],
    icon: <Globe className="w-4 h-4" />,
    color: "from-green-500 to-emerald-500",
    stats: { clients: "500+", rating: "4.8" }
  },
  {
    id: "Employee Performance System",
    img: "/dsh.png",
    href: "https://performance-evaluation-kappa.vercel.app/auth/login",
    desc: "Admin dashboard for employee evaluation and organizational performance metrics.",
    tags: ["React", "Dashboard", "Analytics"],
    icon: <Terminal className="w-4 h-4" />,
    color: "from-blue-500 to-indigo-500",
    stats: { clients: "50+", rating: "4.9" }
  },
  {
    id: "HostNet",
    img: "/hot.png",
    href: "https://host-net.vercel.app",
    desc: "Modern hosting service UI platform built with Next.js.",
    tags: ["Next.js", "UI/UX", "Hosting"],
    icon: <Zap className="w-4 h-4" />,
    color: "from-purple-500 to-pink-500",
    stats: { clients: "200+", rating: "4.7" }
  },
  {
    id: "Fitness Tracker",
    img: "/marketplae.png",
    href: "https://github.com/bayedhaf/Fitness-tracker-web-App",
    desc: "Web application to track workouts and fitness progress.",
    tags: ["React", "Fitness", "Tracking"],
    icon: <Rocket className="w-4 h-4" />,
    color: "from-orange-500 to-red-500",
    stats: { clients: "1000+", rating: "4.9" }
  }
]

/* =========================
CONTACTS
========================= */

const contacts = [
  {
    name: "Email",
    value: "bayedhaf2023@gmail.com",
    href: "mailto:bayedhaf2023@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    gradient: "from-blue-400 to-blue-500",
    textColor: "text-blue-400"
  },
  {
    name: "Phone",
    value: "+251 916 656 489",
    href: "tel:+251916656489",
    icon: <Phone className="w-5 h-5" />,
    gradient: "from-green-400 to-green-500",
    textColor: "text-green-400"
  },
  {
    name: "GitHub",
    value: "github.com/bayedhaf",
    href: "https://github.com/bayedhaf",
    icon: <Github className="w-5 h-5" />,
    gradient: "from-slate-300 to-slate-400",
    textColor: "text-slate-300"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/bayedhaf",
    href: "https://www.linkedin.com/in/bayisa-balcha-52b12a334/",
    icon: <Linkedin className="w-5 h-5" />,
    gradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-400"
  },
  {
    name: "Telegram",
    value: "@bayedhaf",
    href: "https://t.me/bayedhaf",
    icon: <Send className="w-5 h-5" />,
    gradient: "from-sky-400 to-cyan-400",
    textColor: "text-sky-400"
  },
  {
    name: "Facebook",
    value: "facebook.com/bayedhaf",
    href: "https://facebook.com/bayedhaf",
    icon: <Facebook className="w-5 h-5" />,
    gradient: "from-indigo-500 to-blue-500",
    textColor: "text-indigo-400"
  }
]

/* =========================
MAIN COMPONENT
========================= */

export default function PortfolioNavigation() {
  const isMobile = useIsMobile()
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 to-slate-800 justify-items-center backdrop-blur-xl border-b border-slate-700">
      
      {/* Decorative gradient line */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <NavigationMenu 
        viewport={isMobile} 
        className="w-full justify-center"
        delayDuration={300}
        skipDelayDuration={500}
      >
        <NavigationMenuList className="flex-wrap justify-items-center gap-2 md:gap-4 px-4">

          {/* HOME */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-900 text-slate-200 hover:text-white hover:bg-slate-700 data-[state=open]:bg-slate-700 ">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 w-[420px] max-w-[95vw] relative overflow-hidden bg-slate-800"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Bayisa Balcha
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    AI-Powered Full-Stack Developer specializing in intelligent web applications, 
                    RAG systems and scalable digital platforms.
                  </p>
                  
                  {/* Happy Clients +4 Button */}
                  <motion.div 
                    className="mt-6 flex items-center gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30">
                        <Users className="w-5 h-5 text-green-400" />
                        <div>
                          <span className="text-white font-bold text-lg">50+</span>
                          <span className="text-green-400 text-sm ml-2">Happy Clients</span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium flex items-center gap-2 shadow-lg shadow-indigo-500/25"
                    >
                      
                    </motion.button>
                  </motion.div>

                  {/* Stats Row */}
                  <div className="mt-4 flex gap-3">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span className="text-amber-300 text-xs font-medium">4.9 Rating</span>
                    </div>
                   
                  </div>
                </div>
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* SKILLS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-950 text-slate-200 hover:text-black hover:bg-slate-700 data-[state=open]:bg-slate-700 data-[state=open]:text-white">
              Skills
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={stagger}
                className="grid md:grid-cols-2 gap-4 p-6 w-[600px] max-w-[95vw] bg-slate-800"
              >
                {skills.map(skill => (
                  <motion.li key={skill.title} variants={fadeUp}>
                    <motion.div
                      whileHover={{ y: -2, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group relative rounded-xl overflow-hidden bg-slate-700/50 border border-slate-600 hover:border-indigo-500 transition-all duration-300"
                    >
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
                      
                      <div className="relative p-4">
                        <div className="flex items-start gap-3">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                              {skill.title}
                            </h4>
                            <p className="text-slate-400 text-sm mt-1 leading-relaxed group-hover:text-slate-300 transition-colors">
                              {skill.desc}
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress bar indicator */}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </div>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* PROJECTS - Enhanced with better image visibility */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-950 text-slate-200 hover:text-black hover:bg-slate-700 data-[state=open]:bg-slate-700 data-[state=open]:text-white">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={stagger}
                className="grid md:grid-cols-2 gap-6 p-6 w-[720px] max-w-[95vw] bg-slate-800"
              >
                {projects.map(p => (
                  <motion.li
                    key={p.id}
                    variants={fadeUp}
                    className="group"
                    onHoverStart={() => setHoveredProject(p.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative rounded-2xl overflow-hidden bg-slate-700/50 border border-slate-600 hover:border-indigo-500 transition-all duration-300"
                    >
                      {/* Image Container - Reduced overlay for better visibility */}
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={p.img}
                          alt={p.id}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Lighter gradient overlay - only at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        
                        {/* Tags overlay - Made more visible */}
                        <div className="absolute top-3 left-3 flex gap-2 z-10">
                          {p.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-900/90 text-slate-200 backdrop-blur-sm border border-slate-700 shadow-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Project stats - New */}
                        <div className="absolute top-3 right-3 flex gap-2 z-10">
                          <div className="px-2 py-1 rounded-full bg-slate-900/90 text-amber-400 text-xs font-medium backdrop-blur-sm border border-amber-500/30 flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {p.stats.rating}
                          </div>
                        </div>
                        
                        {/* Icon overlay - Made more visible */}
                        <div className={`absolute bottom-3 right-3 p-2.5 rounded-xl bg-gradient-to-r ${p.color} text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10`}>
                          {p.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-5">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">
                            {p.id}
                          </h3>
                          {/* Client count badge */}
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                            <Users className="w-3 h-3 text-green-400" />
                            <span className="text-green-400 text-xs font-medium">{p.stats.clients}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                          {p.desc}
                        </p>
                        
                        <div className="mt-4 flex items-center justify-between">
                          {/* Enhanced button with better visibility */}
                          <Link
                            href={p.href}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 hover:shadow-xl active:scale-95"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          
                          <div className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">
                            <span>Details</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* CONTACT */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-950 text-slate-200 hover:text-black hover:bg-slate-700 data-[state=open]:bg-slate-700 data-[state=open]:text-white">
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={stagger}
                className="grid md:grid-cols-2 gap-4 p-6 w-[560px] max-w-[95vw] bg-slate-800"
              >
                {contacts.map(c => (
                  <motion.li
                    key={c.name}
                    variants={fadeUp}
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={c.href}
                        className="group block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50 border border-slate-600 hover:border-indigo-500 transition-all duration-300"
                        >
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${c.gradient} text-white shadow-lg`}>
                            {c.icon}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                              {c.name}
                            </div>
                            <div className={`text-sm ${c.textColor} mt-0.5 truncate group-hover:text-indigo-300 transition-colors`}>
                              {c.value}
                            </div>
                          </div>
                          
                          <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </Link>
                    </NavigationMenuLink>
                  </motion.li>
                ))}
              </motion.ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}