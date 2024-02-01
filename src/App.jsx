import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import { Hero,About, Blog, CardSect, Forum, Possibilty,Spons } from './container'
const App = () => {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
    <>
        {
          loading ? <Loader/> : (
            <>
            <div className='bg-gradient overflow-hidden'>
              <div className='w-full  max-w-[1200px] mx-auto'>
                <Navbar/>
                <Hero/>
              </div>
            </div>
            <div className='bg-background '>
              <div className='w-full  max-w-[1200px] mx-auto'>
                <Spons/>
                <CardSect/>
                <About/>
                <Possibilty/>
                <Forum/>
                <Blog/>
                
              </div>
              <div className='bg-blue-night '>
                <div className='w-full  max-w-[1200px] mx-auto'>
                  <Footer/>
                </div>
              </div>
            </div>
       </>
          )
        }
      
    </>
  )
}

export default App