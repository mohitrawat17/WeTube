import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_API } from "./utils/constants";
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

  //api call for search suggestions
  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_API + text);
    const json = await data.json();
    setSuggestions(json[1]);
    setExtra(json[0].length);
    // console.log(json);
    if(json[0].length==0){
      setIsShown(false)
    }
    else{
      setIsShown(true)
    }
    
    // console.log(suggestions);
  };
  return (
    <div className="py-3 px-2 grid grid-flow-col fixed top-0 w-full z-50 bg-[#0C0C0C]">
      {/* hamburger, logo */}
      <div className="flex col-span-1 ">
        <MenuIcon
          onClick={() => handleToggle()}
          className="text-white  cursor-pointer hover:bg-gray-700 p-[3px] hover:rounded-full"
          style={iconStyle}
        />

        <img
          alt="logo"
          className="w-11 h-8 ml-4 cursor-pointer"
          src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
        />
        <h2 className="cursor-pointer text-white font-bold text-xl ml-1">
          WeTube
        </h2>
      </div>

      {/* search */}
      <div className="col-span-10 justify-self-center ">
        <div className="flex">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="search"
            placeholder="Search"
            className="text-slate-800 w-96 pl-3 rounded-s-3xl py-1 outline-none"
            onFocus={()=>{
              if(extra){
                setIsShown(true);
              }
            }}
            onBlur={()=>setIsShown(false)}
          />
          <div className="px-3 py-[2px] cursor-pointer text-white bg-[#4b4a4a] rounded-e-3xl">
            <SearchIcon style={iconStyle} />
          </div>
        </div>

        {/* search suggestions */}
        {isShown && (
          <div className="bg-[#212121] mt-1 w-[24rem]  rounded-lg pt-4 pb-2 fixed">
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
      <div className="col-span-1">
        <AccountCircleIcon
          className="text-white cursor-pointer "
          style={iconStyle}
        />
      </div>
    </div>
  );
};

export default Header;
