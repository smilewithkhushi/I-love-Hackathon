'use client';
import React from 'react'
import HackathonCard from '@/components/cities/HackathonCard';
import hackathonData from '../../data/hackathons/bhubaneswar_data'; 

const page = () => {

    return (
        <div className="px-4 md:px-12 my-12">
            <HackathonCard details={hackathonData} />
        </div>
    )
}

export default page