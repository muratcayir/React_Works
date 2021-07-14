import React from "react";

class SearchBar extends React.Component {
  state = {
    search: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row- mb-5">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
              value={this.setState.value}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
