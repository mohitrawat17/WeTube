import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LiveChat from "./LiveChat";

const CardDetails = () => {
  const [params] = useSearchParams();
  const [videoData, setVideoData] = useState();

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

  //API
  const CARD_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    params.get("v") +
    "&key=" +
    process.env.REACT_APP_API_KEY;

  const cardApi = async () => {
    const data = await fetch(CARD_API);
    const json = await data.json();
    // console.log(json);
    setVideoData(json?.items[0]);
  };

  return (
    <div className="ml-7">
      <div className="m-2 flex">
        <div className="w-8/12">
          <iframe
            className="w-full h-[450px]"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h2 className="mt-2">{videoData?.snippet?.localized?.title}</h2>
          <div className="flex my-2 justify-between">
            <div className="flex">
              <img
                width="50px"
                className="mr-3 rounded-full"
                src="https://yt3.googleusercontent.com/ytc/AOPolaRRmQP1YlArzlNZ8GZvOIKAJ20BiRjqArbE2I_e5A=s176-c-k-c0x00ffffff-no-rj"
              />
              <div className="flex flex-col justify-center">
                <h3>{videoData?.snippet?.channelTitle}</h3>
                <h3 className="text-gray-400 text-sm">30M subscribers</h3>
              </div>
            </div>
            <div className="mr-80 px-4 pt-2 my-1 font-semibold rounded-3xl bg-white text-black">
              Subscribe
            </div>
            <div className="px-4 pt-2 my-1 font-semibold rounded-3xl bg-[#4b4a4a]">
              <div className="flex">
                <ThumbUpIcon className="mr-1 cursor-pointer" />
                <h2 className="cursor-pointer">
                  {(videoData?.statistics?.likeCount / 1000).toFixed(1)}K
                </h2>

                <h2 className=" ml-2 border-l-2 border-solid border-white h-6"></h2>
                <ThumbDownIcon className="ml-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12">
            <LiveChat />
          </div>
      </div>
      <Comments />
    </div>
  );
};

export default CardDetails;
