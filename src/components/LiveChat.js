import { useEffect, useState } from 'react';
import ChatMesseges from './ChatMesseges';
import { useDispatch, useSelector } from 'react-redux';
import { addMesseges } from '../Utils/chatSlice';
import { meaningfulString, randomNameGenerate } from '../Utils/random';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  // initialize as empty string to keep input controlled
  const dispatch = useDispatch();
  const chatMessages = useSelector(store=> store.chat.messages);

  useEffect(()=>{
    const i = setInterval(()=>
    {
      console.log("setinterval api calling");
      dispatch(addMesseges({
        name: randomNameGenerate(),
        messages: meaningfulString
      }))
    },5000);
    return ()=>clearInterval(i);
  },[])
  return (
    <div className='w-full h-[600px] border border-black px-5 m-2 rounded-lg bg-slate-100 flex flex-col'>
      <div className='flex-1 overflow-y-auto flex flex-col-reverse'>
        { // don't use index as key
          chatMessages.map((chat, index) => (
            <ChatMesseges
              key={index}
              name={chat.name}
              message={chat.messages}
            />
          ))
        }
      </div>
      <form className='w-full border border-black mt-2 flex rounded-lg'
        onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addMesseges({
            name:"Avijit",
            messages: liveMessage
          }))
          setLiveMessage("");
        }}>
        <input className='w-full' type='text' value={liveMessage} onChange={(e)=>{
          setLiveMessage(e.target.value);
        }} />
        <button className='bg-green-300 font-bold rounded-t-lg'>Send</button>
      </form>
    </div>
  )
}

export default LiveChat