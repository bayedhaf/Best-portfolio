"use client"

import React from "react"
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Send, 
  MailPlus, 
  Phone,
  Heart,
  Sparkles,
  Code2,
  Rocket,
  ArrowUpRight,
  Download,
  MessageSquare,
  Briefcase,
  User,
  Home,
  Mail,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const contacts = [
    { 
      name: "Email", 
      href: "mailto:bayedhaf2023@gmail.com", 
      icon: <MailPlus className="w-4 h-4" />, 
      color: "from-blue-500 to-cyan-500",
      hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-600",
      bgGlow: "bg-blue-500/20"
    },
    { 
      name: "Phone", 
      href: "tel:+251916656489", 
      icon: <Phone className="w-4 h-4" />, 
      color: "from-green-500 to-emerald-500",
      hoverColor: "group-hover:from-green-600 group-hover:to-emerald-600",
      bgGlow: "bg-green-500/20"
    },
    { 
      name: "Github", 
      href: "https://github.com/bayedhaf", 
      icon: <Github className="w-4 h-4" />, 
      color: "from-purple-500 to-pink-500",
      hoverColor: "group-hover:from-purple-600 group-hover:to-pink-600",
      bgGlow: "bg-purple-500/20"
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/bayedhaf", 
      icon: <Linkedin className="w-4 h-4" />, 
      color: "from-blue-600 to-blue-700",
      hoverColor: "group-hover:from-blue-700 group-hover:to-blue-800",
      bgGlow: "bg-blue-600/20"
    },
    { 
      name: "Telegram", 
      href: "https://t.me/bayedhaf", 
      icon: <Send className="w-4 h-4" />, 
      color: "from-sky-500 to-blue-500",
      hoverColor: "group-hover:from-sky-600 group-hover:to-blue-600",
      bgGlow: "bg-sky-500/20"
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/bayedhaf", 
      icon: <Facebook className="w-4 h-4" />, 
      color: "from-indigo-600 to-blue-600",
      hoverColor: "group-hover:from-indigo-700 group-hover:to-blue-700",
      bgGlow: "bg-indigo-600/20"
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", href: "/projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Contact", href: "#",icon: <Mail className="w-4 h-4" /> },
  ]

  const resources = [
    { name: "Resume", href: "/Bayisa_resume-a.pdf", icon: <Download className="w-4 h-4" />, badge: "PDF" },
    { name: "Hire Me", href: "#", icon: <MessageSquare className="w-4 h-4" />, badge: "Available" },
    { name: "Blog", href: "#", icon: <Code2 className="w-4 h-4" />, badge: "New" },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const stagger = {
    show: {
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1120] to-[#0F172A] text-white pt-20 pb-8 px-6 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-600/30 via-cyan-600/30 to-teal-600/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Newsletter/CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-indigo-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Work Together
                </h3>
                <p className="text-gray-400 mt-1">Ready to start your next project?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium overflow-hidden shadow-xl shadow-indigo-600/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-slate-800/50 text-white font-medium border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              >
                <Download href='/Bayisa_resume-a.pdf' className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Section - 4 columns */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 space-y-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bayisa.dev
              </span>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              Crafting digital experiences with cutting-edge technology. 
              Specialized in AI-powered applications and modern web solutions.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-400">Trusted by 50+ clients</span>
            </motion.div>
          </motion.div>

          {/* Quick Links - 2 columns */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-4"
          >
            <motion.h3 variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Navigation
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li key={i} variants={fadeUp}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                      {link.icon}
                    </span>
                    {link.name}
                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources - 2 columns */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-2 space-y-4"
          >
            <motion.h3 variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Resources
            </motion.h3>
            <ul className="space-y-3">
              {resources.map((item, i) => (
                <motion.li key={i} variants={fadeUp}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center justify-between p-2 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      {item.badge}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Grid - 4 columns */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 space-y-4"
          >
            <motion.h3 variants={fadeUp} className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Connect
            </motion.h3>
            <div className="grid grid-cols-3 gap-3">
              {contacts.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={c.href}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
                    target="_blank"
                  >
                    <div className={`p-2.5 rounded-lg bg-gradient-to-r ${c.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {c.icon}
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
                      {c.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative pt-8 mt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                &copy; {new Date().getFullYear()} Bayisa Balcha.
              </span>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span className="text-gray-400 flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> in Ethiopia
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1 group">
               
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1 group">
                
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
              <Link href="/sitemap" className="text-xs text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-1 group">
                
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-5 right-0 p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-shadow"
          >
            <ArrowUpRight className="w-4 h-4 rotate-45" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}