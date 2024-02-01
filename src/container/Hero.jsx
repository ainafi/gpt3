import React from 'react'
import Button from '../components/Button'
import Ai from "../assets/image/ai.png"
import People from '../assets/image/people.png';
import { motion } from "framer-motion"
const Hero = () => {
  
  return (
    <div className='md:flex items-center   ml-4 mt-9 pb-5'>
      <div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-gradient font-manrope font-bold sm:text-[45px] text-[40px] md:text-[50px] mb-5 md:mb-9 " >Let’s Build Something <br />
          amazing with GPT-3 <br />
          OpenAI <br />
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='paragraph sm:w-[50%] font-manrope font-light  pb-5'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</motion.p>

        <motion.div 
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className='mb-5'>
          <input className='w-[250px]  h-[45px] bg-blue-night outline-none p-1 mr-5 mb-2'  placeholder='Your Adress Mail' type="text" />
          <Button name="Get Started"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className='pb-4 flex items-center '>
          <img src={People} alt="people" />
          <p className='ml-1 text-white text-[12px]'>1,600 people requested access a visit in last 24 hours</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className='hidden md:flex md:mr-6'>
        <img className='md:w-[700px]  w-[600px] ' src={Ai} alt="ai" />
      </motion.div>
    </div>
  )
}

export default Hero