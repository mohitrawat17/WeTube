import React from 'react'
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"
import BottomContainer from './BottomContainer'


const Container = () => {
  return (
    <div className='ml-44 max-sm:ml-0'>
        <ButtonList/>
        <VideoContainer/>
        <BottomContainer/>
    </div>
  )
}

export default Container
