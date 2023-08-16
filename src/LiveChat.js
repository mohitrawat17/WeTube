import React, { useEffect } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage,clearMessages } from './utils/chatSlice';
import { generate, makeid } from './utils/constants';

const LiveChat = () => {
  const dispatch=useDispatch(); //dispatching event or pushing live chat data in store

  const chatData=useSelector(store=>store.chat.messages); //accessing chat data from store


    useEffect(()=>{
      
       const i= setInterval(() => {
            dispatch(addMessage({
              name:generate(),
              msg: makeid(8)+" "+" "+makeid(6)
            }))
        }, 1500);

        
        
        // return ()=>dispatch(clearMessages());
    },[])



  return (
    <div className='m-2 p-2 border border-slate-600 rounded-xl h-96 overflow-y-scroll flex flex-col-reverse'> 
     {
      chatData.map((c,i)=>{
        return(
          <ChatMsg name={c.name} chat={c.msg} key={i}/>
        )
      })
     }
    </div>
  )
}

export default LiveChat
