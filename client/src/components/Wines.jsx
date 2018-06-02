import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulateWines from './PopulateWines.jsx';
import SearchWines from './SearchWines.jsx';
import $ from 'jquery';
//import SidebarWines from './SidebarWines.jsx';
//import winesData from '../data/winesData.js';

class Wines extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wines : []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/winedata',
      contentType: 'application/json',
      success: (data) => {
        this.setState({wines: data});
      },
      error: (err) => {
        console.error('Client wine fetch error: ', err);
      }
    })
  }

  handleSearch(query) {
    $.ajax({
      type: 'POST',
      url: '/winedata',
      data: {query: query},
      success: (wines) => {
        this.setState({wines: wines});
      },
      error: (err) => {
        console.error('Client wine search error: ', err);
      }
    })
  }

  render() {
    return(
      <Grid>
        <SearchWines onSearch={this.handleSearch}/>
        {/*<SidebarWines wines={winesData}/>*/}
        <PopulateWines wines={this.state.wines}/>


      </Grid>
    )
  }
}
export default Wines;