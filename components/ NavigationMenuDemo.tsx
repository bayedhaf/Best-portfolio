"use client"

import * as React from "react"
import Link from "next/link"
import { Linkedin, Github, Send, Phone, Facebook, MailPlus } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/app/hooks/use-mobile"
import Image from "next/image"

// PROJECT + SKILLS SECTIONS
const components: { title: string; href: string; description: string }[] = [
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

// CONTACT SECTION
const contacts = [
  { name: "Email : baye…", href: "mailto:bayedhaf2023@gmail.com", icon: <MailPlus className="text-blue-600" /> },
  { name: "Phone : +251…", href: "tel:+251916656489", icon: <Phone className="text-green-600" /> },
  { name: "Github", href: "https://github.com/bayedhaf", icon: <Github className="text-gray-800" /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bayedhaf", icon: <Linkedin className="text-blue-700" /> },
  { name: "Telegram", href: "https://t.me/bayedhaf", icon: <Send className="text-cyan-700" /> },
  { name: "Facebook", href: "https://www.facebook.com/bayedhaf", icon: <Facebook className="text-blue-500" /> },
]
const projects=[
  {pro_id:'Agritech-et', img:'/farm.png' ,href:'' ,defin:' Complete shopping system with cart, authentication, and admin dashboard.'},
    {pro_id:'ASTU ENPLOYER Mnagement system',img:'/admin-users.png' ,href:'/' ,defin:' Complete shopping system with cart, authentication, and admin dashboard.'},
      {pro_id:'HostNet', href:'', img:'/hot.png' ,defin:'Complete shopping system with cart, authentication, and admin dashboard.'},
        {pro_id:'Fiteness Track', href:'', img:'/marketplace.png' ,defin:' Complete shopping system with cart, authentication, and admin dashboard.'},
]

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
            <ul className="grid gap-2 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-full w-full rounded-lg p-6 flex flex-col justify-end transition-all hover:shadow-xl hover:scale-[1.02] border border-gray-200"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-semibold text-gray-800">
                      HI! I'm Bayisa Balcha
                    </div>
                    <p className="text-sm text-gray-600">
                      Full-stack developer building scalable, responsive, and secure applications using MERN and TypeScript.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/docs" title="Projects">
                Featured client + portfolio work.
              </ListItem>

              <ListItem href="/docs/installation" title="Experience">
                Full-stack development + API integration.
              </ListItem>

              <ListItem href="/docs/primitives/typography" title="Services">
                Software, UI engineering and backend architecture.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ABOUT */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            About Me
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 sm:w-[400px] md:w-[520px] md:grid-cols-2 lg:w-[620px] p-4">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* DOCS */}
        <NavigationMenuItem>
  <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
    Projects
  </NavigationMenuTrigger>
  <NavigationMenuContent>
    <ul className="grid gap-4 sm:w-[400px] md:w-[550px] lg:w-[720px] md:grid-cols-2 p-4">

      {/* Project 1 */}
        {projects.map((items)=>(
           <li  key={items.pro_id} className="rounded-lg border bg-white p-3 shadow-sm hover:shadow-lg transition">
        <Image
          width={500}
          height={500}
          src={items.img}
          alt="project preview"
          className="w-full h-32 rounded-md object-cover"
        />
        <div className="mt-2 text-sm font-semibold">
        {items.pro_id}
        </div>
        <p className="text-xs text-gray-600">
         {items.defin}
        </p>
        <Link
          href={items.href}
          className="block mt-2 text-center text-sm font-medium bg-primary text-white rounded-md p-1 hover:bg-primary/80 transition"
        >
          See Demo
        </Link>
      </li>
        ))

        }
        </ul>
  </NavigationMenuContent>
</NavigationMenuItem>


        {/* SKILLS */}
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            Skills
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-4 p-4">
              <li>
                <NavigationMenuLink>
                  <div className="font-medium">Core Stack</div>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Express / MongoDB</li>
                    <li>REST APIs / JWT / Session auth</li>
                  </ul>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* CONTACT – responsive and attractive */}
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="font-semibold text-gray-700 hover:text-primary transition">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 sm:w-[400px] md:w-[520px] lg:w-[650px] md:grid-cols-2 p-4">
              {contacts.map((contact) => (
                <li key={contact.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={contact.href}
                      className="flex gap-3 items-center w-full rounded-lg border border-transparent px-4 py-2 transition-all bg-white hover:bg-gray-100 hover:border-primary shadow-sm"
                    >
                      <span className="text-xl">
                        {contact.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {contact.name}
                      </span>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

// REUSABLE NAV ITEM
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
