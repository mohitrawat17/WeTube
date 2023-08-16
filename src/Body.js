import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className=' m-3 mt-16'>
        <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
