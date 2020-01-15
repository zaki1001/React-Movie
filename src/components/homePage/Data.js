import React, { Component, PropTypes } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Data extends Component {
    
    render() {
        return (

            <div  style={{width:'100%'}} id={this.props.movie.id}  ><img src={this.props.movie.poster_src} style={{width:"100%"}}></img>
            <div className="caption center-align" ><h2>{this.props.movie.title}</h2>
            <h5 className="light grey-text text lighten-1 hide-on-small-only ">{this.props.movie.overview}</h5></div></div>
     
        );

    }
}

export default Data;