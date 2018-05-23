import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulateWines from './PopulateWines.jsx';
import SearchWines from './SearchWines.jsx';
import SidebarWines from './SidebarWines.jsx';
import winesData from '../data/winesData.js';

class Wines extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wines : []
    }
  }

  render() {
  return(
    <Grid>
      <SearchWines/>
      {/*<SidebarWines wines={winesData}/>*/}
      <PopulateWines wines={winesData}/>
    </Grid>
    )
 }
}
export default Wines;