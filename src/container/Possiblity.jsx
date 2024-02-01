import React from 'react'
import  Possibilti from  '../assets/image/possibility.png'
import {motion} from 'framer-motion'
const Possiblity = () => {
  return (
    <motion.div 
      whileInView={{x:[100,0],opacity:[0,1]}} 
      transition={{duration:1 , ease:'easeIn'}}
    className='mt-[6rem] flex flex-wrap items-center'>
      <img className='md:w-[350px]' src={Possibilti} alt="possibility" />

      <div className='ml-[4rem]'>
        <p className='text-[12px] md:text-[18px] mt-6'>Request Early Access to Get Started</p>
        <h3 className='text-gradient font-extrabold text-[22px] pb-5 pt-5 md:text-[28px]'>The possibilities <br /> are beyond your imagination</h3>
        <p className='text-[12px] md:text-[16px] pb-5'>Yet bed any for travelling assistance indulgence unpleasing. Not <br />thoughts all exercise blessing. Indulgence way everything joy alteration <br />boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='text-[15px] md:text-[18px] mt-2 text-secondary'>Request Early Access to Get Started</p>
      </div>
      
    </motion.div>
  )
}

export default Possiblity