

const ButtonList = ()=>{
    const buttons = ["All", "Music", "Live", "Gaming", "News", "Sports", "Learning", "Fashion", "Comedy", "Beauty", "Podcast", "Movies", "Tech", "Travel", "Cars", "Food", "Animals", "DIY", "Fitness"];
    return(
        <div className="flex overflow-x-auto p-2">
            {buttons.map((button, index) => (
                <button key={index} className="px-4 py-2 m-2 bg-gray-100 rounded-full hover:bg-gray-200">{button}</button>
            ))}
        </div>
    )
}   

export default ButtonList;