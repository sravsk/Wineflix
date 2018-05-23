import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulateWines extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : this.props.wines
    }
  }

  render(){
     return(
      <Grid>
      {this.state.data.map((wine) => (
        <Row key={wine.id}>
            <div>
               <Col xs={6} md={4}>
                  <Thumbnail src={wine.image_thumb_url}/>
                </Col>
                <Col xs={6} md={4}>
                  <div>{wine.name}</div>
                  <Button>Suggest Movies</Button>
                </Col>
                <Col xs={6} md={4}>
                  <div>{wine.producer_name}</div>

                </Col>
                <Col xs={6} md={4}>
                  <div>{wine.primary_category}</div>
                </Col>
                <Col xs={6} md={4}>
                  <div>{wine.secondary_category}</div>
                </Col>
                <Col xs={6} md={4}>
                  <br/>
                  <Well bsSize="small">{wine.description}</Well>
                </Col>
            </div>
          </Row>
      ))
    }
    </Grid>
    )
  }
}

export default PopulateWines;

