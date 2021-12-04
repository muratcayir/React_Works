import {useState} from 'react'

export default function Counter() {

    const [counter,setCounter]=useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
            <button onClick={()=>setCounter(counter-1)}>Decrease</button>
        </div>
    )
}
