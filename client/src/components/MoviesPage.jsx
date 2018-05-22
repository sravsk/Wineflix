import React from 'react';
import Search from './Search.jsx';

class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.getMovies();
      this.setState({_isMounted: true});
    }
  }

  // performSearch(e) {
  //   var val = $('.Search input').val();
  //   console.log('searched', val);
  // }


  getMovies() {
    var movieUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=6f0f6ccafaaff428439efd8e3edd254a';
    fetch(movieUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({
        data: data
      })
    })
    .catch((err) => {
      console.log('err', err);
    })
  }


  render() {
    return (
      <div>
        <Search />
        <div className="container" style={{display: 'flex'}}>
          <div className="movie-name"></div>
        </div>
        <button onClick={() => console.log('click', this.state.data)}></button>
      </div>
    )
  }
}

export default MoviesPage;