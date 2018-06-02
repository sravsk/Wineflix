import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulateMovies from './PopulateMovies.jsx';
import SearchMovies from './SearchMovies.jsx';
import $ from 'jquery';
//import SidebarMovies from './SidebarMovies.jsx';
//import moviesData from '../data/moviesData.js';

class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/moviedata',
      contentType: 'application/json',
      success: (data) => {
        this.setState({movies: data});
      },
      error: (err) => {
        console.error('Client movie fetch error: ', err);
      }
    })
  }

  handleSearch(query) {
    $.ajax({
      type: 'POST',
      url: '/moviedata',
      data: {query: query},
      success: (movies) => {
        this.setState({movies: movies});
      },
      error: (err) => {
        console.error('Client movie search error: ', err);
      }
    })
  }

  render() {
    return(
      <Grid>
        <SearchMovies onSearch={this.handleSearch}/>
        <PopulateMovies movies={this.state.movies}/>
      </Grid>
    )
  }
}

export default Movies;