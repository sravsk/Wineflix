import React from 'react';
import Wines from './Wines.jsx';
import Movies from './Movies.jsx';
import { Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const logo = require ('../assets/wineflixlogosmall.png');

const Content = (props) => {
  return (
        <div id="content-main">
        <div className="home_logo"> <img className="img-logo" src={logo}/></div><hr/>
          <div className="content">
            <Link className="wine-block" to="/wines">
              <div className="fnd-wine-button">Find a Wine</div>
            </Link>
            <Link className="movie-block" to="/movies">
              <div className="fnd-movie-button">Find a Movie</div>
            </Link>
          </div>
        </div>
    )
}

export default Content;