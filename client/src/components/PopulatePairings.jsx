import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulatePairings extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid>
        {this.props.movies.map((movie, index) => (
          <Row key={movie.id}>
            <div>
               <Col xs={3} md={3}>
                  <Thumbnail src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                </Col>
               <Col xs={3} md={3}>
                  <div className="pairing-info">
                    <h4>{movie.title}</h4>
                    <p>paired with:</p>
                    <h4>{this.props.wines[index].name}</h4>
                    <h1>&#x1f44d;   &#x1f44e;</h1>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <Thumbnail src={this.props.wines[index].image_thumb_url}/>
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

