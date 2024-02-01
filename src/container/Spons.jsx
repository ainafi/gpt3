import React from 'react'
import { Sponsors } from '../utils/utilis'
import { motion } from "framer-motion"
const Spons = () => {
    
  return (
    <motion.div
      whileInView={{x:[100,0],opacity:[0,1]}} 
      transition={{duration:0.8 , ease:'easeIn'}}
      className='pt-[5rem] pb-[5rem] flex items-center justify-center p-5'>
      {Sponsors.map((image)=>(
        <img 
        key={image.id}
        src={image.img}
        alt={image.img}
        className="w-[80px] sm:w-[90px] m-2"
        />
      ))}
    </motion.div>
  )
}

export default Spons