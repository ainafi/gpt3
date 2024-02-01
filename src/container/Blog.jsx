import React from 'react'
import BlogCard from '../components/BlogCard'
import {Blogs} from '../utils/utilis'
import {motion} from 'framer-motion'
const Blog = () => {
  return (
    <div className='mr-4'>
      <motion.h2 
      whileInView={{y:[100,0],opacity:[0,1]}} 
      transition={{duration:1 , ease:'easeIn'}}
     className='text-gradient font-manrope font-bold text-[28px] md:text-[42px] text-center'>A lot is happening,<br />we are blogging about it</motion.h2>
      <div className='flex flex-wrap items-center justify-center '>
        {Blogs.map((blog)=>(
          <BlogCard key={blog.id} {...blog}/>
        ))}
      </div>
    </div>
  )
}

export default Blog