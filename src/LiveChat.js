import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'





const LiveChat = () => {

    useEffect(()=>{
       const i= setInterval(() => {
            console.log("hey");
        }, 2000);
        return ()=>clearInterval(i)
    },[])



  return (
    <div className='m-2 p-2 border border-slate-600 rounded-xl'> 
      <ChatMsg name="Mohit" chat="hello this is namste react " />
      <ChatMsg name="Mohit" chat="hello this is namste react " />
      <ChatMsg name="Mohit" chat="hello this is namste react " />
      <ChatMsg name="Mohit" chat="hello this is namste react " />
    </div>
  )
}

export default LiveChat
