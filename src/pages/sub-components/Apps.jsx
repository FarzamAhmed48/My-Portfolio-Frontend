import { Card } from '@/components/ui/card';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apps = () => {
  const [Apps, setApps] = useState([]);
  useEffect(() => {
    const getAllApps = async () => {
      const res = await axios.get(
        "https://my-portfolio-backend-gilt-rho.vercel.app/api/v1/softwareApplication/getAll",
        { withCredentials: true }
      );
      setApps(res.data.softwareApplications);
    };
    getAllApps();
  }, []);
  return (
    <div className='w-full flex flex-col gap-8 sm:gap-12 '>
      <h1 className='w-fit overflow-x-hidden text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] tracking-[2px] mb-4 mx-auto text-tubeLight-effect decent_text'>My Apps</h1>

      <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {
          Apps.map(element=>{
            return(
              <Card className="h-fit p-7 flex flex-col justify-center items-center gap-3 " key={element._id}>
                  <img src={element.svg && element.svg.url} alt={element.title} className='h-12 sm:h-24 w-auto'/>
                  <p className='text-muted-foreground text-center'>{element.name}</p>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Apps
