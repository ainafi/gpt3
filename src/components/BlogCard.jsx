import React from 'react'
import {motion} from 'framer-motion'
const BlogCard = ({img,description}) => {
  return (
    <motion.div
      whileInView={{y:[100,0],opacity:[0,1]}} 
      transition={{duration:1 , ease:'easeIn'}}
     className=' mt-[4rem] p-3'>
        <img className='w-[300px]' src={img} alt="" />

        <div className='bg-blue-night w-[300px] p-2'>
          <p className='pt-3 pb-5 font-medium '>21 sept 2023</p>
          <h4 className='text-white font-bold mb-[2rem]'>{description}</h4>
          <div className='pt-[2rem]'>
            <p className='cursor-pointer capitalize'>read full article</p>
          </div>
        </div>
        
    </motion.div>
  )
}

export default BlogCard