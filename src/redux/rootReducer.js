import { combineReducers } from "redux";
import { moviesReducer } from "./movies/movie-reducer";
import { currentMovieReducer } from "./currentPlayedMovie/currentPlayedMovie-reducer";

export const rootReducer = combineReducers({
  moviesReducer,
  currentMovieReducer,
});
