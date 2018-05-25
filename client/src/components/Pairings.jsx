import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulatePairings from './PopulatePairings.jsx';
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
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulatePairings movies={moviesData}/>
      </Grid>
      )
  }
}

export default Pairings;