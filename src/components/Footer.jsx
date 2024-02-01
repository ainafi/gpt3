import React from 'react'
import Logo from '../assets/image/logo.svg'
const Footer = () => {
  return (
    <div className='bg-blue-night w-full mt-[4rem] p-[4rem] '>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-gradient text-center text-[30px] font-bold capitalize mb-[3rem] '>Do you want to step in to the future before others</h2>
        <button className='border border-white p-3 text-white'>Request Early Access</button>
      </div>
      <div className='pt-[3rem] pb-[2rem] mx-[3rem] md:mx-0 md:flex items-center justify-between'>
          <img className='pb-5' src={Logo} alt="" />
          <div>
            <h5 className='font-bold text-[15px] font-manrope text-white mb-5 mt-2 '>Links</h5>
            <ul>
              <li className='text-white text-[13px]'>Overons</li>
              <li className='text-white text-[13px]'>Social Media</li>
              <li className='text-white text-[13px]'>Counters</li>
              <li className='text-white text-[13px]'>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold text-[15px] font-manrope text-white mb-5 mt-2 '>Company</h5>
            <ul>
              <li className='text-white text-[13px]'>Terms & Conditions</li>
              <li className='text-white text-[13px]'>Privacy Policy</li>
              <li className='text-white text-[13px]'>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className='font-bold text-[15px] font-manrope text-white mb-5 mt-2 '>Get in touch</h5>
            <ul>
              <li className='text-white text-[13px]'>Crechterwoord K12 182 DK Alknjkcb</li>
              <li className='text-white text-[13px]'>085-132567</li>
              <li className='text-white text-[13px]'>info@payme.net</li>
              
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer