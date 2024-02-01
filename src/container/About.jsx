import React from 'react'
import { Feature, Feature2 } from '../utils/utilis'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div
      whileInView={{x:[100,0],opacity:[0,1]}} 
      transition={{duration:1 , ease:'easeIn'}}
     className='mt-[7rem] flex flex-wrap justify-between'>
      <div className='m-2 mb-6'>
        <h1 className='text-gradient font-extrabold text-[20px] md:text-[30px]  '>The Future is Now <br /> and You Just Need To Realize <br /> It. Step into Future Today <br /> & Make it Happen.
        </h1>
        <p  className='text-secondary mt-6 text-[14px] '>Request Early Access to Get Started</p>
      </div>

     <div className='flex '>
      <div className='ml-2 pr-8 lg:pr-[8rem]'>
        {Feature.map((feature,index)=>(
          <div key={feature.id}  className='mt-5 m-2'>
            <div className='w-[50px] bar-gradient  h-[2px] rounded-3xl mb-2 mt-2'></div>
            <h3 className='text-white font-manrope w-[140px]'>{feature.content} </h3>
          </div>
        ))}
      </div>

      <div>
        {Feature2.map((feature,index)=>(
          <div key={feature.id} className='p-3'>
            <p className='text-[13px] w-[200px] font-manrope'>{feature.content}</p>
          </div>
        ))}
      </div>
     </div>
      
    </motion.div>
  )
}

export default About