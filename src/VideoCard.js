import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  let { channelTitle, title, thumbnails } = snippet;

 
        title= title.slice(0, 37) + "...";
    
  

  return (
    <div className="max-lg:m-3 max-lg:w-[220px] max-sm:m-2 max-sm:w-64 m-4 w-80 cursor-pointer">
      <img
        alt="thumbnail"
        className="w-80 rounded-2xl mb-2"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        {statistics ? (
          <li>{Math.round(statistics?.viewCount / 1000000)}M views .</li>
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
};

export default VideoCard;
