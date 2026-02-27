import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = ()=>{
    const isMenuOpen = useSelector((state)=> state.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return(
        <div className="p-2 shadow-lg w-48">
            <ul>
                <li><Link to="/">🏠Home</Link></li>
                <li>🎥Shorts</li>
            </ul>
            <h1 className="font-bold py-5">Subscriptions</h1>
            <ul>
                <li>🎶Music</li>
                <li>📽️Videos</li>
                <li>🎮Gaming</li>
                <li> 🍽️Foods</li>
                <li>📺Channels</li>
            </ul>
            <h1 className="font-bold py-5">You</h1>
            <ul>
                <li>History</li>
                <li>Playlists</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
                <li>Downloads</li>
                <li>Show More</li>
            </ul>
        </div>
    )
}

export default SideBar;