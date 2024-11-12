//import AboutBlockonSection from '@/components/about/AboutBlockon'
import AboutINBMSection from '@/components/about/AboutINBM'
import AboutSection from '@/components/about/AboutSection'
import CallForPartners from '@/components/CallForPartners'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <AboutSection/>
        <AboutINBMSection/>
        <CallForPartners/>
    </div>
  )
}

export default page