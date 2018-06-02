import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

const PopulateWines = (props) => {

  return(
    <Grid>
      {props.wines.map((wine) => (
        <Row key={wine.id}>
          <div className = "col-desktop">
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
          <div className="col-responsive">
            <h3 className={"wine-name-responsive"}>{wine.name}</h3>
            <Col xs={6} md={4}>
              <Thumbnail src={wine.image_thumb_url}/>
            </Col>
            <Col xs={6} md={4}>
              <div>{wine.producer_name}</div>
              <div>{wine.secondary_category}</div>
              <Button className={"suggest-movies"}>Suggest Movies</Button>
            </Col>
            <Col xs={6} md={4} className={"responsive-list"}>
              <Well bsSize="small">{wine.description}</Well>
            </Col>
          </div>
        </Row>
      ))}
    </Grid>
  )
}


export default PopulateWines;

