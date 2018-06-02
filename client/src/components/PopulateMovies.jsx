import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

const PopulateMovies = (props) => {

  return(
    <Grid>
      {props.movies.map((movie) => (
        <Row key={movie.id}>
          <div className = "col-desktop">
            <Col xs={6} md={4}>
              <Thumbnail src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            </Col>
            <Col xs={6} md={4}>
              <div>{movie.title}</div>
              <Button>Suggest Wines</Button>
            </Col>
            <Col xs={6} md={4}>
              <div>Rating: {movie.vote_average}</div>

            </Col>
            <Col xs={6} md={4}>
              <div>Votes: {movie.vote_count}</div>
            </Col>
            <Col xs={6} md={4}>
              <div>Released: {movie.release_date}</div>
            </Col>
            <Col xs={6} md={4}>
              <br/>
              <Well bsSize="small">{movie.overview}</Well>
            </Col>
          </div>
          <div className = "col-responsive">
              <h3>{movie.title}</h3>
            <Col xs={6} md={4}>
              <Thumbnail src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
            </Col>
            <Col xs={6} md={4}>
              <div>Rating: {movie.vote_average}</div>
              <div>Votes: {movie.vote_count}</div>
              <div>Released: {movie.release_date}</div>
              <Button className={"suggest-wines"}>Suggest Wines</Button>
            </Col>
            <Col xs={6} md={4} className={"responsive-list"}>
              <Well bsSize="small">{movie.overview}</Well>
            </Col>
          </div>
        </Row>
      ))}
    </Grid>
  )
}

export default PopulateMovies;

