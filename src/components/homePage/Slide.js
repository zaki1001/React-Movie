import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../../App.css';
import Slider from "react-slick";
import styled from 'styled-components';
import Data from './Data.js';
import $ from 'jquery'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#252a34" }}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#252a34" }}
      onClick={onClick}
    />
  );
}

class  Slide extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    
  
     
componentDidMount(){ 


       
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9347ea3310e2b25bb6d5eab69e5caca8'
        $.ajax({
      url: apiUrl,
      success:(scc)=>{
         const results = scc.results
     
        

var movieRows = []
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/original" + movie.backdrop_path
           console.log(movie.poster_path)
          const movieRow = <Data key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
          console.log(movieRows);
      })
        this.setState({rows:movieRows})
      },

      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
      }

    

     
        
    



render(){
    return (
       
        <div className='zaki'>

            <Slider  speed={900} slidesToShow={1} slidesToScroll={1} dots={true} infinite={true} transition = {500} fade={true} autoplay={true}  autoplaySpeed={800}  nextArrow={<SampleNextArrow />} prevArrow={ <SamplePrevArrow />} >{this.state.rows}

</Slider>


        </div>
    )
}
}

export default Slide;