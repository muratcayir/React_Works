import axios from "axios";
import React from "react";



class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    const movie = response.data;
    this.setState({
      name: movie.name,
      rating: movie.rating,
      overview: movie.overview,
      imageURL: movie.imageURL,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Edit The Form To Update A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" value={this.state.rating} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageURL" value={this.state.imageURL}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview" value={this.state.overview}
                rows="5"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Add Movie"
          />
        </form>
      </div>
    );
  }
}

export default EditMovie;
