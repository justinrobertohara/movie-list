export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul>{this.props.movie.title}</ul>;
  }
}
