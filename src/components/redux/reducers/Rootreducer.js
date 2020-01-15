const INITIALSTATE = {
  searchInput: "",
  allstaff: []
};

export const rootReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "SEARCH_ALL":
      return {
        ...state,
        allstaff: action.movie
      };

    default:
      return state;
  }
};
