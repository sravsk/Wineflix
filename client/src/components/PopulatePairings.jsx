import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulatePairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : this.props.movies,
      wines : this.props.wines,
    };
  }

  render(){
    return(
      <Grid>
        {this.state.data.map((movie, index) => (
          <Row key={movie.id}>
            <div>
               <Col xs={6} md={4}>
                  <Thumbnail src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                </Col>
               <Col xs={3} md={3}>
                  <div class="pairing-info">
                    <h4>{movie.title}</h4>
                    <p>paired with:</p>
                    <h4>{this.state.wines[index].name}</h4>
                    <h1>&#x1f44d;   &#x1f44e;</h1>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <Thumbnail src={this.state.wines[index].image_thumb_url}/>
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

