import { useState } from "react";

function Counter() {

const [counter,setCounter] = useState(0)


const increase = ()=>setCounter(counter + 1)
const decrease = ()=>setCounter(counter - 1)

    return (
        <>
        <h3>{counter}</h3>
          <button onClick={increase}>sayac arttır</button>
          <button onClick={decrease}>sayac azalt</button>
        </>
    )


}

export default Counter;