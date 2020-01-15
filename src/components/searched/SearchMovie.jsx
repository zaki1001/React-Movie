import React, { Component } from "react";
import "./search.scss";
import { SearchMovies } from "../redux/actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class SearchMovie extends Component {
  state = {
    search: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.getInput(this.state.search);
    this.props.history.push("/search");
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getInput(this.state.search);

    this.props.history.push("/search");
  };
  render() {
    return (
      <>
      <div className="row  ">
      <div class="col s12 card-panel grey darken-1">
     
      <div class=" col s12">
      <form className="input-field col s12 " onSubmit={this.handleSubmit}>
      
       <i className="material-icons prefix  fa fa-search" />
        
        <input type="text"
            name="search"
            id="autocomplete-input"
            className="autocomplete"
            onChange={this.handleChange}
            placeholder="Search Movies, Tv-Show, People & etc " />
                
        </form>
  </div>
    
    </div>

      </div>
      </>
    );
  }
}

const dispatchStateToProps = dispatch => {
  return {
    getInput: text => dispatch(SearchMovies(text))
  };
};
export default withRouter(
  connect(
    null,
    dispatchStateToProps
  )(SearchMovie)
);




    

          
          
        
