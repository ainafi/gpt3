import React from 'react'

const Liste = ({title,description}) => {
  return (
    <div className='p-4 md:w-[300px] w-[200px] '>
        <div>
        <div className='w-[50px] bar-gradient  h-[2px] rounded-3xl mb-2 mt-2'></div>
        <h3 className='font-manrope font-extrabold text-white mb-3'>{title}</h3>
        </div>
        <p className='w-auto '>{description} </p>
    </div>
  )
}

export default Liste