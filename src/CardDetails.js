import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";

const CardDetails = () => {
  const [params] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    //sidebar handling
    dispatch(closeMenu());
    return () => {
      dispatch(openMenu());
    };
  }, []);


  return(
     <div className="bg-pink-300">
        
     </div>
     );
};

export default CardDetails;
