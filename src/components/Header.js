import { useDispatch, useSelector, } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { cacheSearchResults } from "../Utils/searchSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_SUGGETIONS_API } from "../Utils/constants";

const Header = ()=>{
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store=> store.search);

    const dispatch = useDispatch();
    const handleToggleMenu = ()=>{
        dispatch(toggleMenu());
    }

    useEffect(()=>{
        // if there's no query we don't need to do anything
        if (!searchQuery.trim()) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(()=> {
            if(searchCache[searchQuery]){
                // cached value, no network call
                setSuggestions(searchCache[searchQuery]);
            } else {
                getYoutubeSearchSuggestions();
            }
        }, 200);
        return ()=> clearTimeout(timer);
    },[searchQuery, searchCache])

    const getYoutubeSearchSuggestions = async()=>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGETIONS_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheSearchResults({[searchQuery]: json[1]}));
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={()=>handleToggleMenu()} className="h-12 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" />
                <img className="h-12 mx-2" alt="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ8dMUN-33agcSX_sI9qWZWfb7-ZPiqGbLSg&s" />
            </div>
            <div className="relative">
                <div className="col-span-10">
                    <input value={searchQuery} 
                    onChange={(e)=> setSearchQuery(e.target.value)} 
                    onFocus={()=> setShowSuggestions(true)}
                    onBlur={()=> setShowSuggestions(false)}
                    className="px-5 border border-gray-400 rounded-l-full w-1/2 p-2" type="text" placeholder="Search" />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-slate-100">🔍</button>
                </div>
                {showSuggestions && 
                    <div className="absolute bg-white w-[23rem] shadow-lg rounded-lg mt-2 bg-gray-100">
                        <ul>
                            {suggestions.map(sug=><li key={sug} className="py-1 shadow-sm px-2 hover:bg-gray-100">🔍{sug}</li>)}
                        </ul>
                    </div>
                }
            </div>
            <div className="col-span-1 border border-black m-auto">
                <img className="h-10" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header;