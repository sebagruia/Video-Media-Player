import {
  GET_MOVIES,
  SELECT_ACTIVE_MOVIE,
  ADD_SHUFFLED_MOVIE_LIST
} from "./movie-action";

const initialState = {
  movies: "",
  shuffledMovies:[]
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_SHUFFLED_MOVIE_LIST:
      return {
        ...state,
        shuffledMovies: action.payload,
      };
    case SELECT_ACTIVE_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
