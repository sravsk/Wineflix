import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulatePairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : this.props.movies,
      wines : this.props.wines
    }
  }

  render(){
    return(
      <Grid>
        {this.state.data.map((movie) => (
          <Row key={movie.id}>
            <div>
               <Col xs={3} md={3}>
                  <Thumbnail src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                </Col>
               <Col xs={3} md={3}>
                  <h4>{movie.title}</h4>
                  <p>paired with:</p>
                  <h4>{this.state.wines[0].name}</h4>
                </Col>
                <Col xs={3} md={3}>
                  <Thumbnail src={this.state.wines[0].image_thumb_url}/>
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

