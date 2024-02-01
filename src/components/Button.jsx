import React from 'react'

const Button = (props) => {
  return (
    <button className='w-[115px] h-[45px] bg-secondary text-white capitalize'>{props.name}</button>
  )
}

export default Button