import React, { Component } from "react";
import "./tvshowdetail.css";
import Iframe from "react-iframe";
import 'materialize-css/dist/css/materialize.min.css';
import Slider from "react-slick";
const image = "https://image.tmdb.org/t/p/w500";

const image1 = "https://image.tmdb.org/t/p/w185/"


class TvshowDetail extends Component {
  state = {
    movieDe: [],
    gendre: [],
    video: [],
    season1: [],
    playin: false,
    player:false
  };

  video = () => {
    const apikey = "9347ea3310e2b25bb6d5eab69e5caca8";
    const apiUrl = `https://api.themoviedb.org/3/tv/${
      this.props.match.params.tvshow
    }/videos?api_key=${apikey}`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(video => {
        this.setState({ ...this.state, video: video.results });
      });
  };
  componentDidMount() {
    const apikey = "9347ea3310e2b25bb6d5eab69e5caca8";
    const apiUrl = `https://api.themoviedb.org/3/tv/${
      this.props.match.params.tvshow
    }?api_key=${apikey}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.poster_path) {
          this.setState({ movieDe: data, gendre: data.genres ,season1:data.seasons });
          document.title = data.original_name;
        }
      });
    this.video();
  }

  
  render() {
    const { movieDe, gendre, video,season1,player } = this.state;

    const trailerVid = video.map(vid => {
      const url = `https://www.youtube.com/embed/${vid.key}`;
      return (
        <div class="video-container " key={vid.id} controls>
        <iframe width="650" height="410" src={url} frameborder="0" allowfullscreen></iframe>
      </div >
       
      );
    });

    const gen = gendre.map(genre => (
      <div key={genre.id} >
        <span> {genre.name},</span>
      </div>
    ));

    const buttonhandler = () => {
     /*const search = document.querySelector("responsive-video")
     search.classList.toggle("vide")*/
     this.setState({player:!player})
     console.log(this.state.player);
        
   } 

    const poster = image + movieDe.poster_path;


    
    const trailerButton = () => {
      document.querySelector(".vieosIframe").classList.toggle("openTrailer");
      this.setState({ ...this.state, playin: true });
    };
   
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
            <h4 class="left-align white-text bold">{movieDe.original_name}</h4>
            </div>
             <h5 class="left-align">Vote: {movieDe.vote_average}</h5>
<h6 className="black-text">Vote count: {movieDe.vote_count}</h6>
            
<div className="genree">
            Genre: {gen}
            </div>
            <span>Status: {movieDe.status}</span>
            <p className="black-text">Runtime: {movieDe.episode_run_time}</p>
           <p className="black-text">First Airdate: {movieDe.first_air_date}</p>
     <button className="btn yellow darken-1" onClick={buttonhandler}  >Toggle Trailer </button>
          
           <p className="black-text "><h5>Movie Overview: </h5>{movieDe.overview}</p>
              </div>
   </div>
   
        </div>
        <div className="vide">
        {this.state.player ? trailerVid[0] : <div></div>}
       </div>
      </div>
      </div>
    );
  }
}

export default TvshowDetail;
