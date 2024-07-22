import React from 'react'

const Input = (props) => {
  return (
    <div className='w-1/2'>
        <label className='text-white text-lg'>{props.text1} :</label>
        <input type='text' placeholder={props.name} className='w-full border-none p-4 outline-none bg-gray my-4' />
    </div>
  )
}

export default Input
