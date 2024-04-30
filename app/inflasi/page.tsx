import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Navbar2 from '@/components/layouts/Navbar2'
import Inflasi from '@/components/pages/inflasi/Inflasi'
import HeroInflasi from '@/components/pages/inflasi/hero-inflasi'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <HeroInflasi/>
      <Inflasi/>
      <Footer/>
    </div>
  )
}

export default page
