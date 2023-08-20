import React from 'react';
      
import HomeIcon from '@mui/icons-material/Home';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Link } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/Whatshot';




const BottomContainer = () => {
    return (
        <div className="hidden max-sm:block -mb-2 fixed bottom-0 left-0 w-full bg-black border-t border-gray-300 ">
            <div className="flex justify-around py-2">
                <button className="flex flex-col items-center p-2 focus:outline-none">
                   <Link to='/'> <HomeIcon/></Link>
                    <h2>Home</h2>
                </button>
                <button className="flex flex-col items-center p-2 focus:outline-none">
                <WhatshotIcon/>
                    <h2>Trending</h2>
                </button>
                <button className="flex flex-col items-center p-2 focus:outline-none">
                <SlideshowIcon/>
                    <h2>Shorts</h2>
                </button>
                {/* Add more buttons for other sections */}
            </div>
        </div>
    );
};

export default BottomContainer;
