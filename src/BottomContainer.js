import React from 'react';
      
import HomeIcon from '@mui/icons-material/Home';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Link } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useDispatch } from 'react-redux';
import { addVideos } from './utils/searchSlice';
import { API } from './utils/constants';


const BottomContainer = () => {

    const dispatch=useDispatch();

    const getUpdatedVideos=async(query)=>{
        if(query=='all'){
        const data = await fetch(API);
        const json=await data.json();
        //add videos to store
      dispatch(addVideos(json.items));
        }
        else{
            
      const data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&regionCode=US&key=${process.env.REACT_APP_API_KEY}`);
      const json=await data.json();
      //add videos to store
      dispatch(addVideos(json.items));
        }
      
  
      
      
    }


    return (
        <div className="hidden max-sm:block -mb-3 fixed bottom-0 left-0 w-full bg-black border-t border-gray-300 ">
            <div className="flex justify-around py-2">
                <button className="flex flex-col items-center p-2 focus:outline-none"
                onClick={()=>getUpdatedVideos('all')}
                >
                <HomeIcon/>
                    <h2>Home</h2>
                </button>

                <button
                onClick={()=>getUpdatedVideos('trending')}
                 className="flex flex-col items-center p-2 focus:outline-none">
                <WhatshotIcon/>
                    <h2>Trending</h2>
                </button>

                <button
                onClick={()=>getUpdatedVideos('trending')}
                 className="flex flex-col items-center p-2 focus:outline-none">
                <SlideshowIcon/>
                    <h2>Shorts</h2>
                </button>
                {/* Add more buttons for other sections */}
            </div>
        </div>
    );
};

export default BottomContainer;
