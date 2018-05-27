import React from 'react';
import { Grid, Row, Button} from 'react-bootstrap';

class SearchWines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.key === 'Enter' && this.state.query !== '') {
      this.props.onSearch(this.state.query);
    }
  }

  render() {
    return(
      <Grid>
        <Row>
          <div className="search-wrapper">
            <input className="input-search"
                    placeholder="search wines"
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    value={this.state.query} />
          </div>
        </Row>
      </Grid>
    )
  }
}

export default SearchWines;