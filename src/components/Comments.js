import React from 'react'

const Comments = ({data}) => {
    const {name, text, image, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
        <div className='w-10 h-10'>
            {image}
        </div>
        <div className='px-2'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comments