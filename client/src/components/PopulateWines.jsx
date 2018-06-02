import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';
import PopulateWineItem from './PopulateWineItem.jsx';
import { Switch , Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class PopulateWines extends React.Component {
  constructor (props) {
    super(props);
  }


  render() {
    return(
      <Grid>
        {this.props.wines.map((wine) => (
          <Row key={wine.id}>
            <PopulateWineItem wine={wine}/>
          </Row>
        ))}
      </Grid>
    )
  }
}


export default PopulateWines;

