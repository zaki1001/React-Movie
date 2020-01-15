import React, { Component } from "react";
import "./moviedetails.scss";
import Iframe from "react-iframe";
import 'materialize-css/dist/css/materialize.min.css'

const image = "https://image.tmdb.org/t/p/w500";


class MovieDetails extends Component {
  state = {
    movieDe: [],
    gendre: [],
    video: [],
    player:false
  };

  trailerButton = () => {
    document.querySelector(".vieosIframe").classList.add("openTrailer");
  };

  fetchVideo = () => {
    const apikey = "647ba5ace1aeb9635cfcb906a0cb327a";
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      this.props.match.params.movieDetials
    }/videos?api_key=${apikey}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, video: data.results });
      });
  };
  componentDidMount() {
    const apikey = "9347ea3310e2b25bb6d5eab69e5caca8";
    const apiUrl = `https://api.themoviedb.org/3/movie/${
      this.props.match.params.movieDetials
    }?api_key=${apikey}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.poster_path) {
          this.setState({ movieDe: data, gendre: data.genres });
          document.title = data.original_title;
        }
      });
    this.fetchVideo();
  }
  render() {
    const { movieDe, gendre, video ,player} = this.state;

    const gen = gendre.map(genre => (
      <div key={genre.id}>
        <span> {genre.name},</span>
      </div>
    ));
    const poster = image + movieDe.poster_path;
    const buttonhandler = () => {
     /*const search = document.querySelector("responsive-video")
     search.classList.toggle("vide")*/
     this.setState({player:!player})
     console.log(this.state.player);
        
   } 

  const  buttonhandler2 = () => {
   const  url = "https://www.imdb.com/title/"+movieDe.imdb_id
     window.open(url, "_blank")
  }

    
    const trailerVid = video.map(vid => {
      const url = `https://www.youtube.com/embed/${vid.key}`;
      return (
        <div class="video-container " key={vid.id} controls>
        <iframe width="650" height="410" src={url} frameborder="0" allowfullscreen></iframe>
      </div >
       
      );
    });

    return (
      <div className="container ">
      <div className="cascade">
      <div className="row ctb">
      <div className="col s4  ">
        <div className="card-image" style={{width:"250px",height:"400px"}}>
         
          <img src={poster} alt="movie" style={{width:"250px",height:"400px",borderRadius:"4px"}}  />
            
          </div>
          </div>
          <div className="col s8">
          
          <div className="cascade1">
          <div className="title1">
            <h4 class="left-align white-text bold">{movieDe.title}</h4>
            </div>
             <h5 class="left-align">Vote: {movieDe.vote_average}</h5>
<h6 className="black-text">Vote count: {movieDe.vote_count}</h6>
            
<div className="genree">
            Genre: {gen}
            </div>
            <span>Status: {movieDe.status}</span>
            <p className="black-text">Runtime: {movieDe.runtime}</p>
           <p className="black-text">First Airdate: {movieDe.first_air_date}</p>
          <div className="bihc">
     <button className="btn yellow darken-1" onClick={buttonhandler}  >Open Trailer</button>
          
     <button className="btn small yellow darken-2" onClick={buttonhandler2}  >Visit Imdb Site </button>
          </div>
           <p className="black-text "><h5>Movie Overview: </h5>{movieDe.overview}</p>
              </div>
               
   </div>
   
        </div>
        <div className="vide">
        {this.state.player ? trailerVid[0] : <div></div>}
       </div>
      </div>
      </div>
    ) 
  }
}

export default MovieDetails;
