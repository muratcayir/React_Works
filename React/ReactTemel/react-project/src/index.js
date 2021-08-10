import React from 'react';
import ReactDOM from 'react-dom';
import User from './components/User';

const   friends=["murat","taha","ömer"]
const App = () => {
  return (
   <React.Fragment>

   <User 
   name="murat"
   //age={25} 
   isLoggedIn={true}
   friends={friends}
   adress={{
     title:"Elazığ/Merkez",
     no:6
   }}
   />
 
   </React.Fragment>
     
  )
};
ReactDOM.render(<App />, document.getElementById('root'));
