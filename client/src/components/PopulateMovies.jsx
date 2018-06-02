import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';
import PopulateMovieItem from './PopulateMovieItem.jsx';

const PopulateMovies = (props) => {

  return(
    <Grid>
      {props.movies.map((movie) => (
        <Row key={movie.id}>
          <PopulateMovieItem movie={movie} />
        </Row>
      ))}
    </Grid>
  )
}

export default PopulateMovies;

