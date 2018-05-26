import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  render() {
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
}

export default SearchMovies;