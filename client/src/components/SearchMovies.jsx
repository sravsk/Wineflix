import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

class SearchMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleKeyUp(e) {
    if (e.key === 'Enter') {
      return
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <div className="search-wrapper">
            <input className="input-search"
                    placeholder="search movies"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp} />
          </div>
        </Row>
      </Grid>
    )
  }
}

export default SearchMovies;