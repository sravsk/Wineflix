import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

const SearchMovies = () => {
  return(
    <Grid>
      <Row>
        <div className="search-wrapper">
          <input className="input-search" placeholder="search movies"/>
        </div>
      </Row>
    </Grid>
    )
  }

export default SearchMovies;