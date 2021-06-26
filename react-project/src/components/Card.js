import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card w-100">
        <img src={this.props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text"></p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.cardUpdated}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
