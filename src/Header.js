import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./utils/constants";
import { addVideos } from "./utils/searchSlice";
const Header = () => {
  const [text, setText] = useState(""); // for the working of input text
  const [suggestions, setSuggestions] = useState([]); //for mapping search suggestions
  const [isShown, setIsShown] = useState(false); //to show suggestion only when input is focused
  const[extra,setExtra]=useState(0);// extra space of suggestion when nothing is typed
  
  const iconStyle = {
    fontSize: "2rem",
  };
  // console.log(text);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // debouncing : make an api call on everry key press but if diff. b/w
    // 2 key strokes is less than 200ms then decline api call
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);

    // cleaning up the timer so that the next api call happen only after 200ms of diff. b/w 2 key strokes
    return () => {
      clearTimeout(timer);
    };
  }, [text]);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
         getUpdatedVideos();
    }
  };


  const getUpdatedVideos=async()=>{
    const data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text}&key=${process.env.REACT_APP_API_KEY}`);
    const json=await data.json();

    //if text is empty then show initial videos
    if(text==""){
      json.items=[];
    }

    //add videos to store
    dispatch(addVideos(json.items));
    
  }

  


  //api call for search suggestions
  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_API + text);
    const json = await data.json();
    setSuggestions(json[1]);
    setExtra(json[0].length);
    // console.log(json);
    if(json[0].length===0){
      setIsShown(false)
    }
    else{
      setIsShown(true)
    }
    
  };
  return (
    <div className="max-sm:py-2 max-sm:px-0 py-3 px-2 grid grid-flow-col fixed top-0 w-full z-50 bg-[#0C0C0C]">
      {/* hamburger, logo */}
      <div className="flex col-span-1">
      <div className="text-white  cursor-pointer hover:bg-gray-700 p-[3px] hover:rounded-full max-sm:hidden">
        <MenuIcon
          onClick={() => handleToggle()}
          
          style={iconStyle}
        />
        </div>

        <img
          alt="logo"
          className="w-11 h-8 ml-4 max-sm:ml-1 cursor-pointer max-sm:w-9 max-sm:h-6 max-sm:mt-[2px]"
          src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
        />
        <h2 className="cursor-pointer text-white font-bold text-xl ml-1 max-sm:text-lg">
          WeTube
        </h2>
      </div>

      {/* search */}
      <div className="col-span-10 max-sm:justify-self-end max-sm:mr-3 justify-self-center ">
        <div className="flex">
          <input
          onKeyDown={handleKeyPress}
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="search"
            placeholder="Search"
            className="text-slate-800 max-lg:w-72 max-md:w-56 max-md:rounded-s-2xl max-sm:w-48 w-96 pl-3 rounded-s-3xl py-1 outline-none"
            onFocus={()=>{
              if(extra){
                setIsShown(true);
              }
            }}
            onBlur={()=>setIsShown(false)}
          />
          <div onClick={getUpdatedVideos} className="max-md:px-2 max-md:py-[1px] max-md:rounded-e-2xl max-sm:px-1 max-sm:py-[0px]  px-3 py-[2px] cursor-pointer text-white bg-[#4b4a4a] rounded-e-3xl">
            <SearchIcon style={iconStyle} />
          </div>
        </div>

        {/* search suggestions */}
        {isShown && (
          <div className="bg-[#212121] mt-1 w-[24rem] max-sm:mr-7 rounded-lg pt-4 pb-2 fixed">
            <ul>
              {suggestions.map((data) => {
                return (
                  <div
                    key={data}
                    className="flex pb-1 cursor-default hover:bg-[#4b4a4a]"
                  >
                    <SearchIcon className="ml-2 pr-[6px]" />
                    <li>{data}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* user logo */}
      <div className="col-span-1 max-sm:hidden">
        <AccountCircleIcon
          className="text-white cursor-pointer "
          style={iconStyle}
        />
      </div>
    </div>
  );
};

export default Header;
