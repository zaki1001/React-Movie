import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/homePage/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import Tvshow from "./components/tvshow/Tv-show";
import TvshowDetail from "./components/TvshowDestails/TvshowDetail";
import SearchedData from "./components/searchedAll/SearchedAll";
import SearchMovie from "./components/searched/SearchMovie";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container ">
          <SearchMovie />
          </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv-shows" exact component={Tvshow} />
        <Route path="/search" component={SearchedData} />
        <Route path="/tvshow/:tvshow" exact component={TvshowDetail} />
        <Route path="/movie/:movieDetials" exact component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
