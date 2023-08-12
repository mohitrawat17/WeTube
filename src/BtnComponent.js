import React from 'react'

const BtnComponent = ({name}) => {
  return (
    <div>
      <button className='bg-[#4b4a4a] py-[2px] px-3 rounded-lg mr-3 '>{name}</button>
    </div>
  )
}

export default BtnComponent
