//built by @SmileWithKhushi 
import HeroSection from '@/components/HeroSection'
import Prizes from '@/components/Prizes'
import HackathonThemes from '@/components/timeline/Themes'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <HackathonThemes/>
        <Prizes/>
    </div>
  )
}

export default page