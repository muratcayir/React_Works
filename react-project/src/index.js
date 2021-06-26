import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import Collapse from './components/Collapse';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapExample1">
              <Card
                cardTitle="first card"
                cardText="lorem ipsum "
                cardUpdated=" 5 minutes ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapExample2">
              <Card
                cardTitle="first card"
                cardText="lorem ipsum "
                cardUpdated=" 5 minutes ago"
                image="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse href="collapExample3">
              <Card
                cardTitle="first card"
                cardText="lorem ipsum "
                cardUpdated=" 5 minutes ago"
                image="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
