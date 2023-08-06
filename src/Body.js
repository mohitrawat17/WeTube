import React from 'react'
import Sidebar from './Sidebar'
import Container from "./Container"
const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
      <Container/>
    </div>
  )
}

export default Body
