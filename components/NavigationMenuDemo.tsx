"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Github, Send, Phone, Facebook, MailPlus } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/app/hooks/use-mobile"

/* =========================
   ANIMATION VARIANTS
========================= */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  show: {
    transition: { staggerChildren: 0.07 },
  },
}

/* =========================
   DATA (UNCHANGED)
========================= */
const components = [
  {
    title: "Frontend Engineering",
    href: "/docs/primitives/alert-dialog",
    description:
      "Expertise building scalable UI using React, Next.js, and TypeScript.",
  },
  {
    title: "Backend Services",
    href: "/docs/primitives/hover-card",
    description:
      "API design using Node, Express, MongoDB, authentication and JWT.",
  },
  {
    title: "Progressive Web Apps",
    href: "/docs/primitives/progress",
    description:
      "Building responsive & offline-ready PWAs using modern tooling.",
  },
  {
    title: "Version Control",
    href: "/docs/primitives/scroll-area",
    description:
      "Git workflows, branching strategies, code reviews and CI pipelines.",
  },
  {
    title: "Team Collaboration",
    href: "/docs/primitives/tabs",
    description:
      "Agile development, sprint planning, documentation and PR reviews.",
  },
  {
    title: "Testing",
    href: "/docs/primitives/tooltip",
    description:
      "Unit and integration testing with Jest, React Testing Library.",
  },
]

const contacts = [
  { name: "Email : baye…", href: "mailto:bayedhaf2023@gmail.com", icon: <MailPlus className="text-blue-600" /> },
  { name: "Phone : +251…", href: "tel:+251916656489", icon: <Phone className="text-green-600" /> },
  { name: "Github", href: "https://github.com/bayedhaf", icon: <Github className="text-gray-800" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bayedhaf", icon: <Linkedin className="text-blue-700" /> },
  { name: "Telegram", href: "https://t.me/bayedhaf", icon: <Send className="text-cyan-700" /> },
  { name: "Facebook", href: "https://www.facebook.com/bayedhaf", icon: <Facebook className="text-blue-500" /> },
]

const projects = [
    {pro_id:'Agritech-one', img:'/farm.png' ,href:'https://agritech-et.me' ,defin:' Complete shopping system with cart, authentication, and admin dashboard.'},
    {pro_id:'ASTU ENPLOYER Mnagement system',img:'/dsh.png' ,href:'https://performance-evaluation-kappa.vercel.app/auth/login' ,defin:'The platform provides an Admin Panel for viewing organization-wide evaluation metrics...'},
    {pro_id:'HostNet', href:'https://host-net.vercel.app/', img:'/hot.png' ,defin:'Complete shopping system with cart, authentication, and admin dashboard.'},
    {pro_id:'Fiteness Track', href:'https://github.com/bayedhaf/Fitness-tracker-web-App', img:'/marketplae.png' ,defin:' Fitness track app to record progress and workouts.'},]


export default function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} className="min-w-screen">
      <NavigationMenuList className="flex-wrap">

        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid gap-2 md:w-105 lg:w-130 lg:grid-cols-[.75fr_1fr]"
            >
              <motion.li variants={fadeUp} className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="bg-linear-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-full w-full rounded-lg p-6 flex flex-col justify-end transition-all hover:shadow-xl hover:scale-[1.02] border border-gray-200"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-semibold text-gray-800">
                      HI! I&apos;m Bayisa Balcha
                    </div>
                    <p className="text-sm text-gray-600">
                      Full-stack developer building scalable, responsive, and secure applications using MERN and TypeScript.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </motion.li>

              {["Projects", "Experience", "Services"].map((t, i) => (
                <motion.li key={t} variants={fadeUp}>
                  <ListItem href="/docs" title={t}>
                    Featured professional work and experience.
                  </ListItem>
                </motion.li>
              ))}
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ABOUT */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            About Me
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid gap-3 sm:w-100 md:w-130 md:grid-cols-2 lg:w-155 p-4"
            >
              {components.map((c) => (
                <motion.li key={c.title} variants={fadeUp}>
                  <ListItem href={c.href} title={c.title}>
                    {c.description}
                  </ListItem>
                </motion.li>
              ))}
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PROJECTS */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid gap-4 sm:w-100 md:w-137.5 lg:w-180 md:grid-cols-2 p-4"
            >
              {projects.map((p) => (
                <motion.li
                  key={p.pro_id}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="rounded-lg border bg-white p-3 shadow-sm hover:shadow-lg"
                >
                  <Image
                    width={500}
                    height={500}
                    src={p.img}
                    alt="project preview"
                    className="w-full h-32 rounded-md object-cover"
                  />
                  <div className="mt-2 text-sm font-semibold">{p.pro_id}</div>
                  <p className="text-xs text-gray-600">{p.defin}</p>
                  <Link
                    href={p.href}
                    className="block mt-2 text-center text-sm font-medium bg-primary text-white rounded-md p-1 hover:bg-primary/80 transition"
                  >
                    See Demo
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={stagger}
              className="grid gap-3 sm:w-100 md:w-130 lg:w-162.5 md:grid-cols-2 p-4"
            >
              {contacts.map((c) => (
                <motion.li
                  key={c.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.04 }}
                >
                  <NavigationMenuLink asChild>
                    <Link
                      href={c.href}
                      className="flex gap-3 items-center w-full rounded-lg border border-transparent px-4 py-2 bg-white hover:bg-gray-100 hover:border-primary shadow-sm transition-all"
                    >
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {c.name}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </motion.li>
              ))}
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

/* =========================
   REUSABLE ITEM (UNCHANGED)
========================= */
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md px-3 py-2 hover:bg-gray-100 transition"
        >
          <div className="text-sm font-semibold">{title}</div>
          <p className="text-xs text-gray-600 line-clamp-2">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
