export const GET_MOVIES = "GET_MOVIES";
export const SELECT_ACTIVE_MOVIE = "SELECT_ACTIVE_MOVIE";

export const getMoviesAction = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const selectActiveMovie = (movies, id) => {
  const moviesMapped = Object.values(movies).map((movie) => {
    if (movie.id === id) {
      movie.active = "true";
     

      return movie;
    } else {
      movie.active = "false";
      return movie;
    }
  });
  return {
    type: SELECT_ACTIVE_MOVIE,
    payload: moviesMapped,
  };
};
