import { Button } from '@/components/ui/button'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import axios from 'axios'
import { ExternalLink, Facebook, Github, Instagram, Linkedin } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const [user,setUser]=useState({})
  useEffect(()=>{
    const getUserProfile=async()=>{
        const res=await axios.get("https://my-portfolio-backend-production-27df.up.railway.app/api/v1/user/me/portfolio",{withCredentials:true})
        console.log(res)
        setUser(res.data.user)
    }
    getUserProfile()
},[])
  const heroRef=useRef()
  const hRef=useRef()
  useGSAP(()=>{
    const t1=gsap.timeline()
    t1.from(heroRef.current,{
        x:-300,
        duration:1,

         ease: "power2.out"
    })
    t1.from(hRef.current,{
        x:-3000,
        opacity:0,
        delay:0.5,
        duration:2,
        ease: "elastic.out(1, 3)" 
      
    })
})

    
  return (
    <div className='w-full h-[100vh]' ref={heroRef} >

      <div className='flex items-center gap-2 mb-2'>
        <span className='bg-green-400 rounded-full w-2 h-2'></span>
        <p>Online</p>
      </div>
      <h1  className='overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px]  '>
        Hey, I'm {user.fullName}!
      </h1>

      <h1 className=' overflow-x-hidden text-[1.3rem] sm:text-[1.7rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]'>
        <Typewriter words={["MERN Stack Developer"]} loop={50} cursor typeSpeed={70} deleteSpeed={70} delaySpeed={100}/>
      </h1>


      <div className='w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5 items-center mt-4 sm:mt-8 lg:mt-5'>
        <Link to={user.instagramURL} target='_blank'>
          <Instagram className='text-pink-500 h-7 w-7'/>
        </Link>
        <Link to={user.facebookURL} target='_blank'>
          <Facebook className='text-blue-700 h-7 w-7'/>
        </Link>
        <Link to={user.linkedInURL} target='_blank'>
          <Linkedin className='text-blue-500 h-7 w-7'/>
        </Link>
        <Link to={user.githubURL} target='_blank'>
          <Github className='text-slate-900 h-7 w-7'/>
        </Link>
      </div>

      <div className='mt-4 md:mt-8 lg:mt-7 flex gap-3'>
        <Link to={user.githubURL} target='_blank'>
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github className='text-slate-900 h-7 w-7'/>
            </span>
            <span>
              Github
            </span>
          </Button>
        </Link>

        <Link to={user.resume && user.resume.url} target='_blank'>
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <ExternalLink className='text-slate-900 h-7 w-7'/>
            </span>
            <span>
              Resume
            </span>
          </Button>
        </Link>
      </div>


      <p className='mt-8 text-lg tracking-[1px] ' ref={hRef}>
        {user.aboutMe}
      </p>
      <hr  className='my-8 md:my-8'/>

    </div>
  )
}

export default Hero
