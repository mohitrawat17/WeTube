import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
const CardDetails = () => {
  const [params] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    //fetching api
    cardApi();

    //sidebar handling
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  }, []);

  const CARD_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  params.get("v") +
  "&key="+process.env.REACT_APP_API_KEY;

  const cardApi=async()=>{
    const data=await fetch(CARD_API);
    const json=await data.json();
    // console.log(json);
  }

  return(
     <div className="">
         <iframe
        width="780"
        height="450"
        src={"https://www.youtube.com/embed/"+params.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
     </div>
     );
};

export default CardDetails;
