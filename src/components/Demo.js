import React, { useMemo, useState } from 'react'
import { fact } from '../Utils/random';

const Demo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);
    const factorial = useMemo(() => fact(number), [number]);
    console.log("renderign.....")
    return (
        <div className={`m-4 p-2 border border-black w-96${theme ? ' bg-gray-950' : ''}`}>
            <div>
                <button className='bg-green-300 px-10 mx-28' onClick={() => setTheme(!theme)}>Toggle</button>
            </div>
            <div className='py-5'>
                <input
                    className='border border-black px-2'
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
                    placeholder="Enter a number"
                />
            </div>
            <div className="mt-2 text-yellow-600 text-xl">
                Factorial: {factorial}
            </div>
        </div>
    )
}

export default Demo