import { useState } from "react/cjs/react.development";
import Counter from "./components/Counter";

function App() {

const [isVisible ,setIsVisible ]= useState(true);

  return (
    <div className="App">
    {isVisible && <Counter/>}
    <button onClick={()=>setIsVisible(!isVisible)}>Toogle Counter</button>
    </div>
  );
}

export default App;
