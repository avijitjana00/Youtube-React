import CommentsList from './CommentsList';

const commentData = [
    {
        name: "Avijit jana",
        text: "I love react, It's a beauetiful library provided by javascript",
        image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
        replies:[
            {
                name: "Avijit jana",
                text: "I love react, It's a beauetiful library provided by javascript",
                image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                replies:[
                    {
                        name: "Ms Dhoni",
                        text: "Hey, Avijit, are you devloping youtube app using react!",
                        image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                        replies:[
                            {
                                name: "Avijit jana",
                                text: "I love react, It's a beauetiful library provided by javascript",
                                image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                                replies:[
                                    
                                ]
                            }
                        ]
                    },
                    
                ]
            }
        ]
    },
    {
        name: "Ms Dhoni",
        text: "Hey, Avijit, are you devloping youtube app using react!",
        image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
        replies:[
            {
                name: "Avijit jana",
                text: "I love react, It's a beauetiful library provided by javascript",
                image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                replies:[
                    
                ]
            }
        ]
    },
    {
        name: "Sanju s",
        text: "Hey, MSD, we entered into the semi final t20 2026",
        image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
        replies:[
            {
                name: "Avijit jana",
                text: "I love react, It's a beauetiful library provided by javascript",
                image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                replies:[
                    {
                        name: "Ms Dhoni",
                        text: "Hey, Avijit, are you devloping youtube app using react!",
                        image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                        replies:[
                            {
                                name: "Avijit jana",
                                text: "I love react, It's a beauetiful library provided by javascript",
                                image: <img alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>,
                                replies:[
                                    
                                ]
                            }
                        ]
                    },
                    
                ]
            }
        ]
    }
]

const CommentsContainer = () => {
  return (
    <div className='m-3 p-2'>
        <h1 className='px-2 py-5 font-bold text-xl'> Comments </h1>
        <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer