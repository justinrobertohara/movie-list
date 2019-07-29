import React, { Component } from 'react';
import Movie from './Movie.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Mean Girls', watched: false },
        { title: 'Hackers', watched: false },
        { title: 'The Grey', watched: false },
        { title: 'Sunshine', watched: false },
        { title: 'Ex Machina', watched: false }
      ],
      filtered: [],
      value: '',
      displayList: ''
    };
    this.filterList = this.filterList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.watchedFn = this.watchedFn.bind(this);
    this.watchButton = this.watchButton.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.state.movies
    });
  }

  watchedFn(e) {
    console.log(e);
    console.log(e.target.id);

    for (let i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title === e.target.id) {
        this.state.movies[i].watched = !this.state.movies[i].watched;
      }
    }
    this.forceUpdate();
  }

  watchButton(e) {
    console.log(e.target.id);

    this.setState({
      displayList: e.target.id
    });

    let movies = this.state.movies;
    // movies = movies.filter(item => {
    //   return item.watched === true;
    // });
    console.log(movies);

    // this.setState({ filtered: movies });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newMovie = { title: this.state.value, watched: false };
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
    const buttonStyle = {
      a: 'active',
      background: this.state.watched ? 'green' : 'white'
    };
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

        <button style={buttonStyle} id="toWatch" onClick={this.watchButton}>
          To Watch
        </button>
        <button style={buttonStyle} id="watched" onClick={this.watchButton}>
          Watched
        </button>
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
          {filtered
            .filter(movie => {
              if (this.state.displayList === 'watched') {
                return movie.watched === true;
              } else {
                return movie.watched === false;
              }
            })
            .map((movie, index) => (
              <Movie
                movie={movie}
                key={index}
                watchedFn={this.watchedFn}
                buttonStyle={this.buttonStyle}
              />
            ))}
        </ul>
      </div>
    );
  }
}
