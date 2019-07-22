import React, { Component } from 'react';
import Movie from './Movie.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' }
      ],
      filtered: [],
      value: ''
    };
    this.filterList = this.filterList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.state.movies
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newMovie = { title: this.state.value };
    var movies = this.state.movies;
    movies.push(newMovie);
    alert(movies);

    this.setState({
      filtered: movies
    });
  }

  filterList(event) {
    //more modular, accepts erased values
    let movies = this.state.movies;
    movies = movies.filter(item => {
      return (
        item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });

    this.setState({ filtered: movies });

    //mdn lookup on filtering through arrays with an extra function

    // let stateFilter = this.state.filtered;
    // var value = e.target.value;

    // const filterMovies = (arr, query) => {
    //   return arr.filter(
    //     el =>
    //       el.title
    //         .toString()
    //         .toLowerCase()
    //         .indexOf(query.toLowerCase()) !== -1
    //   );
    // };

    // this.setState({
    //   filtered: filterMovies(stateFilter, value)
    // });
  }

  render() {
    const filtered = this.state.filtered;

    return (
      <div>
        <h1>Movie List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Add a movie..."
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form>
          <div>
            <input
              type="text"
              id="mySearch"
              placeholder="Search"
              name="q"
              onChange={this.filterList}
            />
          </div>
        </form>
        <ul>
          {filtered.map((movie, index) => (
            <Movie movie={movie} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}
