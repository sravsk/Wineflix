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
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/moviedata',
      success: (data) => {
        this.setState({
          movies: data
        })
      },
      error: (err) => {
        console.error('Client movie fetch error: ', err);
      }
    })
  }

  handleSearch() {

  }

  render() {
    return(
      <Grid>
      <button onClick={() => console.log(this.state.movies)}></button>
        <SearchMovies onSearch/>
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulateMovies movies={this.state.movies}/>
      </Grid>
    )
  }
}

export default Movies;