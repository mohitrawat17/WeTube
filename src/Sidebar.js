import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import QueueIcon from '@mui/icons-material/Queue';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import HistoryIcon from '@mui/icons-material/History';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useSelector } from 'react-redux';


const Sidebar = () => {

   const isMenuOpen=useSelector((store)=>store.app.isShown)


//early return pattern
// if(!isMenuOpen) return null;

  
  return isMenuOpen ?
    (
      <div className='flex flex-col mx-3'>
        <HomeIcon className='my-2 cursor-pointer'/>
        <SlideshowIcon className='my-2 cursor-pointer'/>
        <SubscriptionsIcon className='my-2 cursor-pointer'/>
        <LocalLibraryIcon className='my-2 cursor-pointer'/>
      </div>
    )
  :
  (
    <div className='mx-3'>


      <ul className='py-2'>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><HomeIcon className='mr-5'/>Home</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><SlideshowIcon className='mr-5'/>Shorts</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><SubscriptionsIcon className='mr-5'/>Subscriptions</li>
      </ul>

        <hr className=''></hr>



      <ul className='py-2'>
          <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><QueueIcon className='mr-5'/>Library</li>
          <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><HistoryIcon className='mr-5'/>History</li>
          <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><SmartDisplayIcon className='mr-5'/>Your Videos</li>
          <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><AccessTimeIcon className='mr-5'/>Watch Later</li>
          <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><ArrowDropDownIcon className='mr-5'/>Show More</li>
      </ul>

       <hr></hr>
      <ul className='py-2'>
        <h3 className='font-bold pb-2'>Explore</h3>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><WhatshotIcon className='mr-5'/>Trending</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><ShoppingBagIcon className='mr-5'/>Shopping</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><MusicNoteIcon className='mr-5'/>Music</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><MovieIcon className='mr-5'/>Movie</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><LiveTvIcon className='mr-5'/>Live</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><SportsEsportsIcon className='mr-5'/>Gaming</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><NewspaperIcon className='mr-5'/>News</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><SportsBaseballIcon className='mr-5'/>Sports</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><LocalLibraryIcon className='mr-5'/>Learning</li>
        <li className='cursor-pointer hover:bg-gray-700 hover:rounded-md py-[2px]'><DiamondIcon className='mr-5'/>Fashion & Beauty</li>
      </ul>
    </div>
  )
}

export default Sidebar
