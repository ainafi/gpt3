import React from 'react'
import {motion} from 'framer-motion'
const Forum = () => {
  return (
    <motion.div 
      whileInView={{y:[100,0],opacity:[0,1]}} 
      transition={{duration:1 , ease:'easeIn'}}
    className='mt-[4rem] mb-[4rem] bar-gradient p-6 pt-5 rounded-md flex items-center justify-between w-full'>
      <div>
        <p className='text-[12px] md:text-[18px] mt-6'>Request Early Access to Get Started</p>
        <h4 className='font-manrope font-bold capitalize text-[14px] md:text-[20px]'>register to day & start exploring the endless possibilities</h4>
      </div>
      <button className='bg-background w-[100px] h-[40px]   text-white text-[12px] md:text-[16px] capitalize rounded-full p-1'>get Started</button>
    </motion.div>
  )
}

export default Forum