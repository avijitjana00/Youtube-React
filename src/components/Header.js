import { useDispatch, } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = ()=>{
    const dispatch = useDispatch();
    const handleToggleMenu = ()=>{
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={()=>handleToggleMenu()} className="h-12 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
                <img className="h-12 mx-2" alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8dMUN-33agcSX_sI9qWZWfb7-ZPiqGbLSg&s" />
            </div>
            <div className="col-span-10">
                <input className="px-5 border border-gray-400 rounded-l-full w-1/2 p-2" type="text" placeholder="Search" />
                <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100">🔍</button>
            </div>
            <div className="col-span-1">
                <img className="h-10" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header;