import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulatePairings from './PopulatePairings.jsx';
//import SidebarMovies from './SidebarMovies.jsx';
import moviesData from '../data/moviesData.js';
import winesData from '../data/winesData.js';
import $ from 'jquery';

class Pairings extends React.Component {
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
      contentType: 'application/json',
      success: (data) => {
        this.setState({movies: data});
      },
      error: (err) => {
        console.error('Client movie fetch error: ', err);
      }
    });
  }
  render() {
    return(
      <Grid>
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulatePairings movies={this.state.movies} wines={winesData}/>
      </Grid>
      )
  }
}

export default Pairings;