import React from 'react';
import Wines from './Wines.jsx';
import Movies from './Movies.jsx';
import { Grid } from 'react-bootstrap';

const Content = (props) => {
  return (
    <div>
      <Grid>
        <Wines />
        <Movies />
      </Grid>
    </div>
    )
}

export default Content;