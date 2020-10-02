export const GET_MOVIES = "GET_MOVIES";
export const SELECT_ACTIVE_MOVIE = "SELECT_ACTIVE_MOVIE";
export const ADD_SHUFFLED_MOVIE_LIST = "ADD_SHUFFLED_MOVIE_LIST";
export const TOGGLE_PLAY_VIDEO = "TOGGLE_PLAY_VIDEO";

export const getMoviesAction = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};
export const addShuffledMovieList = (movies) => {
  return {
    type: ADD_SHUFFLED_MOVIE_LIST,
    payload: movies,
  };
};

export const togglePlayVideo = (movies, id) => {
  console.log(movies);
  const updatedMoviesObj = { ...movies };
  for (let movie in updatedMoviesObj) {
    if (updatedMoviesObj[movie].id === id) {
      updatedMoviesObj[movie].playStatus = !updatedMoviesObj[movie].playStatus;
    } else {
      updatedMoviesObj[movie].playStatus = false;
    }
  }
  return {
    type: TOGGLE_PLAY_VIDEO,
    payload: updatedMoviesObj,
  };
};

export const selectActiveMovie = (movies, id) => {
  const updatedMoviesObj = { ...movies };
  for (let movie in updatedMoviesObj) {
    if (updatedMoviesObj[movie].id === id) {
      updatedMoviesObj[movie].active = "true";
    } else {
      updatedMoviesObj[movie].active = "false";
    }
  }
  return {
    type: SELECT_ACTIVE_MOVIE,
    payload: updatedMoviesObj,
  };
};
