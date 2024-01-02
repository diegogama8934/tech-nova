import Image from 'next/image'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { Hero } from '@/components/Hero'
import { MisionVision } from '@/components/MisionVision'
import { Valores } from '@/components/Valores'
import { HowToUse } from '@/components/HowToUse'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>

      <Hero/>
    
      <MisionVision/>
    
      <Valores/>
    
      <div className='w-4/5 h-2 m-auto rounded bg-[#E4E4E4]'></div>
    
      <HowToUse/>

      <Footer/>
      
    </>
  )
}
