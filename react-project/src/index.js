import React from 'react';
import ReactDom from 'react-dom';


import Card from './components/Card'



const App =()=>{

return(
<div>
      <div className="card-group">

         <Card  cardTitle="first card"   />

         <Card  cardTitle="second card"/> 

         <Card  cardTitle="third card"/> 
         
      </div>
</div>
)
}
ReactDom.render(<App/>,document.getElementById('root'));