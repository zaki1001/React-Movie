export const SearchMovies = text => {
  return dispatch => {
    const apikey = "647ba5ace1aeb9635cfcb906a0cb327a";
    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${text}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SEARCH_ALL", movie: data.results });
      });
  };
};
