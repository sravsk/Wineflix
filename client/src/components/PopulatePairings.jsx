import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulatePairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : this.props.movies
    }
  }

  render(){
    return(
      <Grid>
        {this.state.data.map((movie) => (
          <Row key={movie.id}>
            <div>
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
          </Row>
        ))
      }
      </Grid>
    )
  }
}

export default PopulatePairings;

