import React, { useEffect, useRef, useState } from 'react'
import Hero from './sub-components/Hero'
import Timeline from './sub-components/Timeline'
import About from './sub-components/About'
import Skills from './sub-components/Skills'
import Portfolio from './sub-components/Portfolio'
import Apps from './sub-components/Apps'
import Contact from './sub-components/Contact'
import axios from 'axios'

import man1 from "../assets/man1.png"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
const Home = () => {
    const imgRef=useRef()
    useGSAP(()=>{
        gsap.from(imgRef.current,{
            x:1100,
            delay:0.5,
            duration:1,
            ease:"power2.out",
        })
        

    })
    
  return (
    <article className='px-32 mt-2 overflow-x-hidden sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 sm:mx-auto w-full flex justify-center flex-col gap-14'>
        <div className='flex relative'>
            <Hero />
            <img ref={imgRef} src={man1} alt="" className=' absolute right-8 h-64 top-16 hidden lg:block rounded-full'/>
        </div>
        <Timeline/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Apps/>
        <Contact/>
    </article>
  )
}

export default Home
