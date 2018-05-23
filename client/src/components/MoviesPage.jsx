import React from 'react';
import Search from './Search.jsx';

class MoviesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      mounted: false
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
        movies: data
      })
    })
    .then(() => {
      this.setState({mounted: true});
    })
    .catch((err) => {
      console.log('err', err);
    })
  }
  // try other life cycle methods
  componentDidMount() {
    this.getMovies();
  }

  // try conditional rendering
  render() {
    // if (this.state.mounted) {
    //   var titles = this.state.movies.results.map((movie, i) => {
    //     return(
    //
    //     )
    //   })
    // } else {
    //   var titles = 'not working'
    // }

    return (
      <div className="container">
        <div className="movie-name" >
          {
            this.state.mounted

            ? this.state.movies.results.map((movie, i) => {
                return(
                  <div key={i} className="movietitle">{movie.title}</div>
                )
              })

            : <div>broken</div>
          }
        </div>
        <button onClick={() => console.log('click', this.state.movies.results[0].title)}></button>
      </div>
    )
  }
}

export default MoviesPage;