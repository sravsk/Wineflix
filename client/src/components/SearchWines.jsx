import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

const SearchWines = () => {
  return(
    <Grid>
      <Row>
        <div className="search-wrapper">
          <input className="input-search" placeholder="search wines"/>
        </div>
      </Row>
    </Grid>
    )
  }

export default SearchWines;