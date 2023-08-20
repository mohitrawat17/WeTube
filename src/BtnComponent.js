import React from 'react'

const BtnComponent = ({name}) => {
  return (
    <div className='my-1'>
      <button className='bg-[#4b4a4a] py-[2px] px-3 rounded-lg mr-3 whitespace-nowrap'>{name}</button>
    </div>
  )
}

export default BtnComponent
