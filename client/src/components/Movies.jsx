import React from 'react';
import { Button } from 'react-bootstrap';

const Movies = (props) => {
  return(
    <div className="movie-block">
      <Button className="fnd-movie-button"><span>Find a Movie</span></Button>
    </div>
  )
}

export default Movies;