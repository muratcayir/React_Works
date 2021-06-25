import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
  return (
    <div>
      <div className="card-group">
        
          <Card
          cardTitle="first card"
          cardText="lorem ipsum "
          cardUpdated=" 5 minutes ago"
          image="https://picsum.photos/id/1/200/300"
        />
       

          <Collapse href="collapseExample2">
          <Card
          cardTitle="second card"
          cardText="lorem ipsum "
          cardUpdated=" 5 minutes ago"
          image="https://picsum.photos/id/1000/200/300"
        />
          </Collapse>

          <Collapse href="collapseExample3">
         No card
          </Collapse>
      

       
        
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
