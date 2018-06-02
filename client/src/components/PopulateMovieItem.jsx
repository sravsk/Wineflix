import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';
import $ from 'jquery';
import { Link } from 'react-router-dom';


class PopulateMovieItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movie : this.props.movie,
      score : this.props.movie.sentiment.sentiment.document.score,
      wines : []
    }
    this.suggestWines = this.suggestWines.bind(this);
  }

  suggestWines(score) {
    $.ajax({
      type: 'POST',
      url: '/suggestWines',
      data: JSON.stringify(this.state.score),
      success: (wines) => {
       this.setState({wines: wines});
      },
      error: (err) => {
        console.error('Client movie search error: ', err);
      }
    })
  }

  render() {
    return(
      <Grid>
        <Row key={this.props.movie.id}>
           <div className = "col-desktop">
            <Col xs={6} md={4}>
              <Thumbnail className="movie-thumbnail" src={`http://image.tmdb.org/t/p/original${this.props.movie.poster_path}`}/>
            </Col>
            <Col xs={8} md={6}>
              <div className="wine-name">{this.props.movie.title}</div>
            </Col>
            <Col xs={6} md={4}><div className="wine-varietal"><span className="wine-varietal-span">Rating  </span><div className="wine-varietal-div">{this.props.movie.vote_average}</div></div>
            </Col>
            <Col xs={6} md={4}>
            <div className="wine-producer"><span className="wine-producer-span">Votes </span><div className="wine-producer-div">{this.props.movie.vote_count}</div></div>
            </Col>
            <Col xs={6} md={4}>
             <div className="primary_category"><span className="wine-primary_category-span">Release Date </span><div className="wine-primary_category-div">{this.props.movie.release_date}</div></div>
            </Col>
            <Col xs={8} md={6}>
              <Well bsSize="small"><span className="wine-description-span">Description </span><div className="wine-description-div">{this.props.movie.overview}</div></Well>
            </Col>
             <Col xs={8} md={6}>
              <Button className="suggested-movies-btn" onClick={this.suggestWines}>Suggested Wines</Button>
             </Col>
           </div>
           <div className = "col-responsive">
              <h3>{this.props.movie.title}</h3>
            <Col xs={6} md={4}>
              <Thumbnail src={`http://image.tmdb.org/t/p/original${this.props.movie.poster_path}`}/>
            </Col>
            <Col xs={6} md={4}>
              <div>Rating: {this.props.movie.vote_average}</div>
              <div>Votes: {this.props.movie.vote_count}</div>
              <div>Released: {this.props.movie.release_date}</div>
              {/*<Button className={"suggest-wines"}>Suggest Wines</Button>*/}
              <Button className="suggested-movies-btn" onClick={this.suggestWines}>Suggested Wines</Button>
            </Col>
            <Col xs={6} md={4} className={"responsive-list"}>
              <Well bsSize="small">{this.props.movie.overview}</Well>
            </Col>
          </div>


        {/* To do : Refactor the below code to be responsive */}
          <div>
            <Grid>
                <Col xs={10} md={8}>
                  <div className="suggestedMovies-list">
                    {this.state.wines.map((wine) => (
                      <Row key={wine.id}>
                        <Col xs={6} md={4}>
                          <Thumbnail className="suggestedMovie-thumbnail"src={wine.image_thumb_url}/>
                        </Col>
                        <Col xs={10} md={8}>
                          <div className="suggestedMovieTitle">{wine.name}</div>
                          <div className="suggestedMovieVotes"><span>Producer : </span>{wine.producer_name}</div>
                          <div className="suggestedMovieRating"><span>Grape Type OR Blend : </span>{wine.varietal}</div>
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

export default PopulateMovieItem;

           // <Col xs={6} md={4}>
           //    <Thumbnail src={`http://image.tmdb.org/t/p/original${this.props.movie.poster_path}`}/>
           //  </Col>
           //  <Col xs={6} md={4}>
           //    <div>{this.props.movie.title}</div>
           //    <Button className="suggested-movies-btn" onClick={this.suggestWines}>Suggested Wines</Button>
           //  </Col>
           //  <Col xs={6} md={4}>
           //    <div>Rating: {this.props.movie.vote_average}</div>

           //  </Col>
           //  <Col xs={6} md={4}>
           //    <div>Votes: {this.props.movie.vote_count}</div>
           //  </Col>
           //  <Col xs={6} md={4}>
           //    <div>Released: {this.props.movie.release_date}</div>
           //  </Col>
           //  <Col xs={6} md={4}>
           //    <br/>
           //    <Well bsSize="small">{this.props.movie.overview}</Well>
           //  </Col>