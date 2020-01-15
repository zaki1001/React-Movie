import React, { Component } from "react";
import { connect } from "react-redux";
import "./searched.scss";
const image = "https://image.tmdb.org/t/p/w500";

class SearchData extends Component {
  render() {
    const { searchData } = this.props;

    const movieTv = searchData ? (
      searchData.map(vidtv => {
        if (vidtv.poster_path) {
          return (
            <div key={vidtv.id} className="movies imagsorce">
              <img  src={image + vidtv.poster_path} alt="movies" onClick={() =>
                  vidtv.media_type === "tv"
                    ? this.props.history.push("/tvshow/" + vidtv.id)
                    : this.props.history.push("/movie/" + vidtv.id)
                }/><h6 className="white-text">{vidtv.original_name}{vidtv.original_title}</h6>
              
            </div>
          );
        }
      })
    ) : (
      <div className="error">PLEASE SEARCH PEOPLE, FILM OR TV-SHOW</div>
    );

    return <div className="searchedData">{movieTv}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.allstaff
  };
};

export default connect(mapStateToProps)(SearchData);
