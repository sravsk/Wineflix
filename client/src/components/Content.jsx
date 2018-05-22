import React from 'react';
import Wines from './Wines.jsx';
import { Grid } from 'react-bootstrap';

const Content = (props) => {
  return (
    <div>
      <Grid>
        <Wines/>
        <div className="movie-block">Find a Movie</div>
      </Grid>
    </div>
    )
}

export default Content;