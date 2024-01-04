import React from 'react'
import { Footer } from '@/Components/Molecules/Footer/Footer'
import { Hero } from '@/Components/Molecules/Hero/Hero'
import { HowToUse } from '@/Components/Molecules/How To Use/HowToUse'
import { MisionVision } from '@/Components/Molecules/Mision y Vision/MisionVision'
import { Valores } from '@/Components/Molecules/Valores/Valores'



const LandingPage = () => {
    return (
        <div>
            <Hero />
            <MisionVision />
            <Valores />
            <div className='w-4/5 h-2 m-auto rounded bg-[#E4E4E4]'></div>
            <HowToUse />
            <Footer />
        </div>
    )
}

export default LandingPage