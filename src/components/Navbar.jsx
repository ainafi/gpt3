import React, { useState } from 'react'
import Logo from '../assets/image/logo.svg'
import Close from '../assets/image/close.png'
import Menu from '../assets/image/hamburger.png'
import { NavLink } from '../utils/utilis'
import Button from './Button'

const Navbar = () => {
  const [active, setactive] = useState(false)
  
  return (
    <header className=" relative pt-5 pl-4 flex items-center justify-between">
      <div>
        <img  className="w-[65px]" src={Logo} alt="logo" />
      </div>
      <nav className='flex items-center justify-between'>
          {NavLink.map((links,id)=>(
            <ul className='hidden md:flex' key={links.id}>
              <li className='m-4'><a  className='text-white  font-manrope' href="#">{links.link}</a></li>
            </ul>
          ))}
      </nav>
      <div className=''>
          <button className='text-white m-5 capitalize '> sign in</button>
          <Button name="Sign Up"/>
      </div>
      <img onClick={()=>setactive(!active)} className='w-[30px] cursor-pointer flex md:hidden' src={active ? Close :Menu} alt="menu" />
      {active ? (
        <div className='absolute  top-[85px] left-[394px] bg-white rounded-md shadow-md '>
        {NavLink.map((links,id)=>(
              <ul  className='md:hidden' key={links.id}>
                <li className='m-4'><a  className='  font-manrope' href="#">{links.link}</a></li>
              </ul>
        ))}
        </div>
      ):''}
    </header>
  )
}

export default Navbar