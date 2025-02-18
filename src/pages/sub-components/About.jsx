import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
const About = () => {
  const [user,setUser]=useState({})
  const headRef=useRef()
    useEffect(()=>{
        const getUserProfile=async()=>{
            const res=await axios.get("https://my-portfolio-backend-gilt-rho.vercel.app/api/v1/user/me/portfolio",{withCredentials:true})
            console.log(res)
            setUser(res.data.user)
        }
        getUserProfile()
    },[])
  return (
    <div className='w-full flex flex-col overflow-x-hidden'>
      <div className='relative'>
        <h1 ref={headRef} className='flex gap-4 items-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold ' style={{background:"hsl(222.2 84% 4.9%)"}}>
          ABOUT
          <span className='text-tubeLight-effect '>
            Me
          </span>
        </h1>
        <span className='absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200'></span>
      </div>
      

      <div>
        <div className='grid md:grid-cols-2 my-8 sm:py-20 gap-14'>
          <div className='flex justify-center items-center'>
            <img src={user.avatar && user.avatar.url} alt={user.fullName}  className='bg-white p-2 sm:p-4 rotate-[5deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] '/>
          </div>

          <div className='flex justify-center flex-col tracking-[1px] text-xl gap-5 text-center'>
            <p>I'm a MERN stack developer with a passion for building fullstack web applications that are both efficient and user-friendly. My journey started with a curiosity about how websites function, and it has evolved into a strong expertise in developing complete solutions, from the frontend interface to the backend infrastructure.</p>
            <p>I am currently pursuing a degree in Software Engineering from UBIT, where I continuously expand my knowledge of web technologies. Balancing academic learning with practical experience has helped me deepen my understanding of development workflows, databases, and best practices in software development.</p>
          </div>
        </div>

        <p className='tracking-[1px] text-xl text-center'>
        Committed to staying current with the latest tools and trends, I'm focused on growing my skills and contributing to impactful projects within the tech industry.
        </p>
      </div>
    </div>
  )
}

export default About
