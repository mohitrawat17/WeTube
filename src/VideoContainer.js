import React, { useEffect, useState } from "react";
import { API } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setVideos(json.items);
  };
  // console.log(videos);

  const searchVideos = useSelector((store) => store.search.videos);

  // console.log(searchVideos);

  return (
    <div className="flex flex-wrap justify-center">

    {/* if search is not clicked then show most popular videos, else show searched videos */}
      {searchVideos.length == 0
        ? 
        videos.map((video) => {
            return (
              <Link key={video.id} to={"/watch?v=" + video.id}>
                {" "}
                <VideoCard info={video} />
              </Link>
            );
          })
        
       
        :
        searchVideos.map((video) => {
          
          return (
            <Link key={video.etag} to={"/watch?v=" + video.id.videoId}>
              {" "}
              <VideoCard info={video} />
            </Link>
          );
        }) }
    </div>
  );
};

export default VideoContainer;
