import React from 'react';
import { Button } from 'react-bootstrap';
<<<<<<< HEAD
import { Grid } from 'react-bootstrap';
import PopulateMovies from './PopulateMovies.jsx';
import SearchMovies from './SearchMovies.jsx';
//import SidebarMovies from './SidebarMovies.jsx';
import moviesData from '../data/moviesData.js';

class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : []
    }
  }

  render() {
    return(
      <Grid>
        <SearchMovies/>
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulateMovies movies={moviesData}/>
      </Grid>
      )
  }
=======

const Movies = (props) => {
  return(
    <div className="movie-block">
      <Button className="fnd-movie-button"><span>Find a Movie</span></Button>
    </div>
  )
>>>>>>> 6aa55950cda16f949067dba2fd7bc8379785e3a1
}

export default Movies;