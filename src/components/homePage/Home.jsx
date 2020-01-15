import React, { Component } from "react";
import "./homePage.scss";
import { connect } from "react-redux";
import 'materialize-css/dist/css/materialize.min.css'


const image = "https://image.tmdb.org/t/p/w500/";

class Home extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const apikey = "647ba5ace1aeb9635cfcb906a0cb327a";
    const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { movies } = this.state;

    return (
      <React.Fragment>
      
       <div className="popular">
        {movies.map(movie => (
          <div key={movie.id} className="popularMovies">
            
            <img
              src={image + movie.poster_path}
              alt=""
              onClick={() => this.props.history.push("/movie/" + movie.id)}
            />
            <p>{movie.original_title}</p>
          </div>
        ))}
     
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allMovies: state.allstaff
  };
};

export default connect(mapStateToProps)(Home);
