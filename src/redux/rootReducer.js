import { combineReducers } from "redux";
import { moviesReducer } from "./movies/movie-reducer";
import { currentMovieReducer } from "./currentPlayedMovie/currentPlayedMovie-reducer";
import { videoReducer } from "./video/video-reducer";

export const rootReducer = combineReducers({
  moviesReducer,
  currentMovieReducer,
  videoReducer,
});
