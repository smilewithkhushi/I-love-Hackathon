import HeroSection from '@/components/HeroSection'
import Schedule from '@/components/timeline/Schedule'
import HackathonTimeline from '@/components/timeline/Timeline'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroSection />
        <HackathonTimeline/>
        <Schedule/>
    </div>
  )
}

export default page