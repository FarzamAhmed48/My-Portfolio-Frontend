import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [viewAll,setViewAll]=useState(false)
  useEffect(() => {
    const getAllProjects = async () => {
      const res = await axios.get(
        "https://my-portfolio-backend-production-27df.up.railway.app/api/v1/project/getAll",
        { withCredentials: true }
      );
      setProjects(res.data.projects);
    };
    getAllProjects();
  }, []);
  return (
    <div>
      <div className='relative mb-12'>
        <h1 className='hidden sm:flex gap-4 items-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold ' style={{background:"hsl(222.2 84% 4.9%)"}}>
          MY
          <span className='text-tubeLight-effect '>
            PORTFOLIO
          </span>
        </h1>
        <h1 className='flex sm:hidden gap-4 items-center text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold ' style={{background:"hsl(222.2 84% 4.9%)"}}>
          MY
          <span className='text-tubeLight-effect '>
            WORK
          </span>
        </h1>
        <span className='absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200'></span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4' >
        {
          viewAll ? projects&&projects.map(element=>{
            return(
              <Link to={`/project/${element._id}`} key={element._id}>
                <img src={element.projectBanner&&element.projectBanner.url} alt="Project Banner" />
              </Link>
            )
          }):projects&&projects.slice(0,9).map(element=>{
            return(
              <Link to={`/project/${element._id}`} key={element._id}>
                <img src={element.projectBanner&&element.projectBanner.url} alt="Project Banner" />
              </Link>
            )
          })
        }
      </div>

      {
        projects&&projects.length>9 && (
          <div className='w-full text-center my-9'>
            <Button className="w-52" onClick={()=>setViewAll(!viewAll)}>
              {viewAll ? "Show Less": "Show More"}
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default Portfolio
