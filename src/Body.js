import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex m-3 mt-12'>
        <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
