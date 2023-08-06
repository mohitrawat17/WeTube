import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useDispatch} from "react-redux"
import {toggleMenu} from './utils/appSlice'
const Header = () => {
  const iconStyle = {
    fontSize: "2rem",
  };

 const dispatch=useDispatch();


  const handleToggle=()=>{
            dispatch(toggleMenu());
  }
  
  return (
    <div className="py-3 px-2 m-2 grid grid-flow-col">
      {/* hamburger, logo */}
      <div className="flex col-span-1 ">
        <MenuIcon onClick={()=>handleToggle()} className="text-white my-auto cursor-pointer hover:bg-gray-700 p-[3px] hover:rounded-full"  style={iconStyle}/>
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
      <div className="col-span-10 justify-self-center flex">
        <input
          type="search"
          placeholder="Search"
          className="w-96 pl-3 rounded-s-3xl py-1 outline-none"
        />
        <div className="px-3 py-[2px] cursor-pointer text-white bg-gray-500 rounded-e-3xl">
          <SearchIcon style={iconStyle} />
        </div>
      </div>

      {/* user logo */}
      <div className="col-span-1">
        <AccountCircleIcon className="text-white cursor-pointer " style={iconStyle}/>
      </div>
    </div>
  );
};

export default Header;
