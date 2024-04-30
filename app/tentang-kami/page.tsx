import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import Navbar2 from '@/components/layouts/Navbar2'
import DetailContacts from '@/components/pages/contacts-page/detail-contacts'
import FooterContacts from '@/components/pages/contacts-page/footer-contacts'
import HeroContacts from '@/components/pages/contacts-page/hero-contatcs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <HeroContacts/>
      <DetailContacts/>
      <FooterContacts/>
    </div>
  )
}

export default page
