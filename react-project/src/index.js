import React from 'react';
import ReactDom from 'react-dom';

// function App(){
//     return <h1>Hello guys!</h1>
// }

class App2 extends React.Component {
    render(){
        return <h1>How are you?</h1>
    }
}

ReactDom.render(<App2/>,document.getElementById('root'));