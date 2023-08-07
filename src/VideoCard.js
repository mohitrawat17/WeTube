import React from 'react'

const VideoCard = ({info}) => {
  const{snippet,statistics}=info;
  const {channelTitle, title, thumbnails}=snippet;
  return (
    
    <div className='m-4 w-80 cursor-pointer'>
       <img alt='thumbnail' className='w-80 rounded-2xl mb-2' src={thumbnails?.medium?.url}/>
       <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.round(statistics.viewCount/1000000)}M views .</li>
       </ul>
    </div>
  )
}

export default VideoCard
