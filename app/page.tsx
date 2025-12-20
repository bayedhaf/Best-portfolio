import NavigationMenuDemo from '@/components/ NavigationMenuDemo'
import React from 'react'
import AboutPage from './about/page'
import ScrollTriggered from './projects/page'
import Footer from '@/components/Footer'

export default function Home() {
  return (
<main className="">
  <NavigationMenuDemo/>
  <AboutPage/>
  <div className="bg-gray-700 border max-w-4xl items-center "></div>
  < ScrollTriggered/>
  <Footer/>
</main>
  )
}
