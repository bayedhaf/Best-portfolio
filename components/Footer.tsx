"use client"

import React from "react"
import { Github, Linkedin, Facebook, Send, MailPlus, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const contacts = [
    { name: "Email", href: "mailto:bayedhaf2023@gmail.com", icon: <MailPlus /> },
    { name: "Phone", href: "tel:+251916656489", icon: <Phone /> },
    { name: "Github", href: "https://github.com/bayedhaf", icon: <Github /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bayedhaf", icon: <Linkedin /> },
    { name: "Telegram", href: "https://t.me/bayedhaf", icon: <Send /> },
    { name: "Facebook", href: "https://www.facebook.com/bayedhaf", icon: <Facebook /> },
  ]

  return (
    <footer className="bg-slate-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About Me</h2>
          <p className="text-sm text-gray-300">
            Full-stack developer with MERN stack expertise. I build modern web apps with clean code and responsive design.
          </p>
        </div>

        {/* Contact Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="flex flex-col gap-2">
            {contacts.map((c) => (
              <li key={c.name}>
                <Link
                  href={c.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  target="_blank"
                >
                  {c.icon}
                  <span className="text-sm">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-300 hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Baye Haf. All rights reserved.
      </div>
    </footer>
  )
}
