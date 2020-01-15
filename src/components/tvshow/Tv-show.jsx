import React, { Component } from "react";
import "./tvshow.scss";
const image = "https://image.tmdb.org/t/p/w500";

class Tvshow extends Component {
  state = {
    tvshow: []
  };

  componentDidMount() {
    const apikey = "9347ea3310e2b25bb6d5eab69e5caca8";
    const apiUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({ tvshow: data.results });
      });
  }
  render() {
    const { tvshow } = this.state;

    const tvShows = tvshow.map(tv => (
      <div className="tvShows" key={tv.id}>
        <div className="shows">
          
          <img src={image + tv.poster_path} alt="tvshow"  onClick={() => this.props.history.push("/tvshow/" + tv.id)}/>
         <p>{tv.original_name}</p>
          
        </div>
      </div>
    ));
    return <div className="tvShow">{tvShows}</div>;
  }
}
export default Tvshow;
