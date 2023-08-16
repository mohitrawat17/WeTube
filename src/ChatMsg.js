import React from 'react'
import user from "./utils/user.png";

const ChatMsg = ({name,chat}) => {
  return (
    <div className='flex py-1'>
    <div className='flex mr-5'>
      <img src={user} className='mr-3 w-6 h-6'/>
      <h2 className='font-semibold text-gray-400'>{name}</h2>
      </div>
      <p>{chat}</p>
    </div>
  )
}

export default ChatMsg
