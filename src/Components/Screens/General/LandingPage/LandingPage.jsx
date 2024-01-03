import React from 'react'
import { Hero } from '@/src/Components/Molecules/Hero/Hero'
import { MisionVision } from '@/src/Components/Molecules/Mision y Vision/MisionVision'
import { Valores } from '@/src/Components/Molecules/Valores/Valores'
import { HowToUse } from '@/src/Components/Molecules/How To Use/HowToUse'
import { Footer } from '@/src/Components/Molecules/Footer/Footer'

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