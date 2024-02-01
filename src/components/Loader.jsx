import React from 'react'
import Lottie from "lottie-react";
import Load from '../assets/image/loader.json'
const Loader = () => {
  return (
    <div className='flex items-center justify-center bg-background w-full h-screen'>
       <Lottie animationData={Load} loop={true} />;
    </div>
  )
}

export default Loader