import React, { useRef, useState } from 'react'

const Demo2 = () => {
    let x = 1;
    const [y, setY] = useState(0);
    const ref = useRef(0);
    console.log("ref...", ref)
  return (
    <div className='m-4 p-2 border border-black w-96'>
        <div>
            <button 
                className='bg-green-300 mx-20'
                onClick={
                        ()=> {
                                x = x+1;
                                {console.log(x)}

                            }
                        }
                    >
                    Increse Value X
            </button>
            <span className='text-xl font-bold'>X : {x}</span>
        </div>
        <div>
            <button 
                className='bg-green-300 mx-20'
                onClick={
                        ()=> {
                                setY(y+1);

                            }
                        }
                    >
                    Increse Value Y
            </button>
            <span className='text-xl font-bold'>Y : {y}</span>
        </div>
        <div>
            <button 
                className='bg-green-300 mx-20'
                onClick={
                        ()=> {
                               ref.current = ref.current + 1;

                            }
                        }
                    >
                    Increse Ref
            </button>
            <span className='text-xl font-bold'>Ref : {ref.current}</span>
        </div>
    </div>
  )
}

export default Demo2