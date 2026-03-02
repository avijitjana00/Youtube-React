const VideoCard = ({info})=>{
    const {snippet, statistics} = info;
    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt="thumbnail" src={snippet.thumbnails.medium.url} className="rounded-lg"/>
            <ul>
                <li className="font-bold py-1">{snippet.title}</li>
                <li>{snippet.channelTitle}</li>
                <li className="flex gap-2 text-sm text-gray-600">
                    <span>{statistics.viewCount} views</span>
                    <span>{Math.floor((new Date().getTime() - new Date(snippet.publishedAt).getTime())/(1000*60*60*24))} days ago</span>
                </li>
            </ul>
        </div>
    )
}

export default VideoCard;