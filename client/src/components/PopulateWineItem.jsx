import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';


class PopulateWineItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      wine : this.props.wine,
      score : this.props.wine.sentiment.sentiment.document.score,
      movies : []
    }
    this.suggestMovies = this.suggestMovies.bind(this);
  }




  suggestMovies(score) {
    $.ajax({
      type: 'POST',
      url: '/suggestMovies',
      data: JSON.stringify(this.state.score),
      success: (movies) => {
       this.setState({movies: movies});
      },
      error: (err) => {
        console.error('Client movie search error: ', err);
      }
    })
  }

  render() {
    return(
      <Grid>
        <Row key={this.props.wine.id}>
          <div className = "col-desktop">
            <Col xs={6} md={4}>
              <Thumbnail src={this.props.wine.image_thumb_url}/>
            </Col>
            <Col xs={8} md={6}>
              <div className="wine-name">{this.props.wine.name}</div>
            </Col>
            <Col xs={6} md={4}><div className="wine-varietal"><span className="wine-varietal-span">Grape Type OR Blend  </span><div className="wine-varietal-div">{this.props.wine.varietal}</div></div>
            </Col>
            <Col xs={6} md={4}>
            <div className="wine-producer"><span className="wine-producer-span">Producer </span><div className="wine-producer-div">{this.props.wine.producer_name}</div></div>
            </Col>
            <Col xs={6} md={4}>
             <div className="primary_category"><span className="wine-primary_category-span">Category </span><div className="wine-primary_category-div">{this.props.wine.primary_category}</div></div>
             </Col>
             <Col xs={8} md={6}>
             <Well bsSize="small"><span className="wine-description-span">Description </span><div className="wine-description-div">{this.props.wine.description}</div></Well>
            </Col>
             <Col xs={8} md={6}>
             <Button className="suggested-movies-btn" onClick={this.suggestMovies}>Suggested Movies</Button>
             </Col>
          </div>
          <div className="col-responsive">
            <h3 className={"wine-name-responsive"}>{this.props.wine.name}</h3>
            <Col xs={6} md={4}>
              <Thumbnail src={this.props.wine.image_thumb_url}/>
            </Col>
            <Col xs={6} md={4}>
              <div>{this.props.wine.producer_name}</div>
              <div>{this.props.wine.secondary_category}</div>
              <Button className={"suggest-movies"}>Suggest Movies</Button>
            </Col>
            <Col xs={6} md={4} className={"responsive-list"}>
              <Well bsSize="small">{this.props.wine.description}</Well>
            </Col>
          </div>

          {/* To do : Refactor the below code to be responsive */}
            <div>
              <Grid>
                <Col xs={8} md={6}>
                    <div className="suggestedMovies-list">
                      {this.state.movies.map((movie) => (
                        <Row key={movie.id}>
                        <Col xs={6} md={4}>
                           <Thumbnail className="suggestedMovie-thumbnail"src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                        </Col>
                        <Col xs={8} md={6}>
                          <div className="suggestedMovieTitle">{movie.title}</div>
                          <div className="suggestedMovieVotes"><span>Votes : </span>{movie.vote_count}</div>
                           <div className="suggestedMovieRating"><span>Rating : </span>{movie.vote_average}</div>
                           <div className="suggestedMovieDate"><span>Release Date : </span>{movie.release_date}</div>
                        </Col>
                      </Row>
                        )
                      )}
                    </div>
                  </Col>
              </Grid>
            </div>
          </Row>
      </Grid>
      )
  }
}

export default PopulateWineItem;