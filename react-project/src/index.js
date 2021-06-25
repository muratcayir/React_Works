import React from 'react';
import ReactDom from 'react-dom';

// function App(){
//     return <h1>Hello guys!</h1>
// }
const name ="murat"
const surname="çayır"

// const names =["murat","ömer","taha"]

function App(){
return(
    <div>
        {/* {names.map(name=>(<h1>{name}</h1>))}
        <ul>
            <li>murat</li>
            <li>murat</li>
        </ul> */}

       

        <button type="button" style={{padding:'5px',backgroundColor:'yellowgreen',border:'3px solid dark'}} >{name.concat(surname)}</button>
    </div>
)
}
ReactDom.render(<App/>,document.getElementById('root'));