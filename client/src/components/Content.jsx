import React from 'react';
import Wines from './Wines.jsx';
import Movies from './Movies.jsx';
import { Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Content = (props) => {
  return (
        <Grid>
          <div className="content">
            <Link className="wine-block" to="/wines">
              <div className="fnd-wine-button">Fine a Wine</div>
            </Link>
            <Link className="movie-block" to="/movies">
              <div className="fnd-movie-button">Find a Movie</div>
            </Link>
          </div>
        </Grid>
    <div>
      <Grid>
        <Wines />
        <Movies />
      </Grid>
    </div>

    )
}

export default Content;