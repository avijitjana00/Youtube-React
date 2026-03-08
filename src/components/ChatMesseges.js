import React from 'react'

const ChatMesseges = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" className='h-8 w-8 mt-2'></img>
        <span className='font-bold p-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMesseges