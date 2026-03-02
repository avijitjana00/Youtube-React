import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    return(
    <div>
        <div className="px-10 py-5 shadow-lg">
            <iframe className="rounded-lg"
                width="1200" 
                height="600" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
        <div>
            <CommentsContainer/>
        </div>
    </div>
    )
}

export default WatchPage;