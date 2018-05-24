import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulateMovies from './PopulateMovies.jsx';
import SearchMovies from './SearchMovies.jsx';
//import SidebarMovies from './SidebarMovies.jsx';
import moviesData from '../data/moviesData.js';

class Pairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : []
    }
  }

  render() {
    return(
      <Grid>
      <div>hi there</div>
        <SearchMovies/>
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulateMovies movies={moviesData}/>
      </Grid>
      )
  }
}

export default Pairings;