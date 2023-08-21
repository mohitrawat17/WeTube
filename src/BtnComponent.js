import React from 'react'
import { useDispatch } from 'react-redux';
import { addVideos } from './utils/searchSlice';

const BtnComponent = ({name}) => {
  
 const dispatch=useDispatch();

  const getUpdatedVideos=async()=>{
    const data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${name}&regionCode=US&key=${process.env.REACT_APP_API_KEY}`);
    const json=await data.json();

    //add videos to store
    dispatch(addVideos(json.items));
    
  }


  return (
    <div className='my-1'>
      <button className='bg-[#4b4a4a] py-[2px] px-3 rounded-lg mr-3 whitespace-nowrap' onClick={getUpdatedVideos}>{name}</button>
    </div>
  )
}

export default BtnComponent
