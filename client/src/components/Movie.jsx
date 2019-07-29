import React from 'react';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: true
    };
  }

  watchedFn() {
    this.setState({
      watched: !this.state.watched
    });
  }

  render() {
    const buttonStyle = {
      a: 'active',
      background: this.props.movie.watched ? 'green' : 'white'
    };

    return (
      <li>
        {this.props.movie.title}
        <button
          id={this.props.movie.title}
          style={buttonStyle}
          onClick={this.props.watchedFn}
        >
          Watched
        </button>
      </li>
    );
  }
}
