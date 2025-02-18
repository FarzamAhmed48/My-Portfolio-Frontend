import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProjectView = () => {
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [projectBanner,setProjectBanner]=useState("")
  const [gitRepoLink,setGitRepoLink]=useState("")
  const [projectLink,setProjectLink]=useState("")
  const [technologies,setTechnologies]=useState("")
  const [stack,setStack]=useState("")
  const [deployed,setDeployed]=useState("")


  const {id}=useParams()

  useEffect(()=>{
    const getProject=async()=>{
      await axios.get(`https://my-portfolio-backend-gilt-rho.vercel.app/api/v1/project/get/${id}`,{withCredentials:true})
      .then((res)=>{
        setTitle(res.data.project.title)
        setDescription(res.data.project.description)
        setProjectBanner(res.data.project.projectBanner &&  res.data.project.projectBanner.url)
        setGitRepoLink(res.data.project.gitRepoLink)
        setProjectLink(res.data.project.projectLink)
        setTechnologies(res.data.project.technologies)
        setStack(res.data.project.stack)
        setDeployed(res.data.project.deployed)
      })
      .catch((err)=>{
        toast.error(err.response.data.message)
      })
    }
    getProject()
  },[id])

  const descriptionInListFormat=description.split(".  ")
  const technologiesInListFormat=technologies.split(". ")
  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14 mt-16">
        <div
          className="w-[100%] px-5 md:w-[650px] "
        >
          <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
              
              <div className="mt-10 flex flex-col gap-5">
                <div className="w-full sm:col-span-4">
                  <h1 className='text-4xl font-bold mb-10 text-center' >
                    {title}
                  </h1>
                  <img src={projectBanner? projectBanner :"/Dashboard/src/assets/profielplaceholder.jpeg"} alt={title} className='w-full h-auto'/>
                </div>

                
                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>Description</p>
                  <ul className='list-disc'>
                    {
                      descriptionInListFormat.map((item,index)=>{
                        return(
                          <li key={index}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>


                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>Technologies used</p>
                  <ul className='list-disc'>
                    {
                      technologiesInListFormat.map((item,index)=>{
                        return(
                          <li key={index}>{item}</li>
                        )
                      })
                    }
                  </ul>
                </div>



                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>Stack</p>
                  <p>{stack}</p>
                </div>

                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>Deployed</p>
                  <p>{deployed}</p>
                </div>

                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>GitHub Link</p>
                  <Link to={gitRepoLink} target='_blank' className='text-sky-700'>
                    {gitRepoLink}
                  </Link>
                </div>

                <div className="w-full sm:col-span-4">
                  <p className='text-2xl mb-2'>Project Link</p>
                  <Link to={projectLink ? projectLink :"/"} target='_blank' className='text-sky-700'>
                    {projectLink? projectLink:"Project not deployed"}
                  </Link>
                </div>
       
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectView
