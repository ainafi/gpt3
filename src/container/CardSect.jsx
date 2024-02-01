import React from 'react'
import { List } from '../utils/utilis'
import Liste from '../components/Liste'
import {motion} from 'framer-motion'
const CardSect = () => {
  return (
    <motion.div
    whileInView={{x:[100,0],opacity:[0,1]}} 
    transition={{duration:1 , ease:'easeIn'}}
    className='bg-gradient w-full p-8'>
      <div className='flex flex-row flex-wrap   md:items-start md:justify-between mb-10 relative'>
        <div className='m-2'>
          <div className='w-[50px] bar-gradient  h-[2px] rounded-3xl'></div>
          <h2 className='text-white font-bold font-manrope'>What is GPT-3</h2>
        </div>
        <div className='md:w-[50%] m-2'>
          <p className='text-white text-[15px] font-manrope font-thin'>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
      </div>

      <div className='flex justify-between items-center pb-10'>
        <h2 className='text-gradient font-bold md:text-[26px] text-[18px]'>The possibilities are beyond <br className='hidden md:flex' /> your imagination</h2>
        <p className='text-secondary'>Explore The Library</p>
      </div>
      <div className='flex flex-wrap justify-between'>
        {List.map((list)=>(
          <Liste key={list.id} {...list}/>
        ))}
      </div>
    </motion.div>
  )
}

export default CardSect