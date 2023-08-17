import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "./utils/chatSlice";
import { generate, makeid } from "./utils/constants";

const LiveChat = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch(); //dispatching event or pushing live chat data in store

  const chatData = useSelector((store) => store.chat.messages); //accessing chat data from store

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          msg: makeid(8) + " " + " " + makeid(6),
        })
      );
    }, 1500);

    // return ()=>dispatch(clearMessages());
  }, []);

  const handleSend=()=>{
    dispatch(addMessage({
      name:"You",
      msg:text
    }))
  }

  return (
    <div className="m-2">
      <div className=" p-2 border border-slate-600 rounded-xl h-96 overflow-y-scroll flex flex-col-reverse">
        {chatData.map((c, i) => {
          return <ChatMsg name={c.name} chat={c.msg} key={i} />;
        })}
      </div>

      <form className="mt-3 flex gap-4"
      onSubmit={(e)=>{
        e.preventDefault();
      }}
      >
        <input
          className="w-full px-2 rounded-lg outline-none text-black"
          type="text"
          placeholder="Type Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={()=>{
          if(text!=""){
            handleSend();
          }
          
          setText("")
          }
          } className="bg-red-600 py-1 px-2 rounded-xl cursor-pointer hover:bg-red-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
