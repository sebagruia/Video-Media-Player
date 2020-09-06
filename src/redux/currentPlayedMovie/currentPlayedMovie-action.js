import { selectActiveMovie } from "../../redux/movies/movie-action";
export const ADD_CURRENT_VIDEOLINK = "ADD_CURRENT_VIDEOLINK";
export const TOGGLE_PLAY_VIDEO = "TOGGLE_PLAY_VIDEO";
export const TOGGLE_LOOP_VIDEO = "TOGGLE_LOOP_VIDEO";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const ADD_REF_TO_CURRENT_VIDEO = "ADD_REF_TO_CURRENT_VIDEO";
export const ADD_NEXT_VIDEOLINK = "ADD_NEXT_VIDEOLINK";
export const ADD_PREVIOUS_VIDEOLINK = "ADD_PREVIOUS_VIDEOLINK";
export const ADD_CURRENT_VIDEO_ID = "ADD_CURRENT_VIDEO_ID";

export const addCurrentVideoLink = (videoLink) => {
  return {
    type: ADD_CURRENT_VIDEOLINK,
    payload: videoLink,
  };
};

export const addNextVideoLink = (dispatch, movies, id) => {
  dispatch(togglePlayVideo(true));
  let nextIndex = 0;
  for (let movie of movies) {
    if (movie.id === id) {
      let currentIndex = movies.indexOf(movie);
      if (currentIndex < movies.length - 1) {
        nextIndex = currentIndex + 1;
        dispatch(addCurrentVideoId(movies[nextIndex].id));
        movies[nextIndex].videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        dispatch(selectActiveMovie(movies, movies[nextIndex].id));
        return {
          type: ADD_NEXT_VIDEOLINK,
          payload: movies[nextIndex].src,
        };
      } else {
        return {
          type: ADD_NEXT_VIDEOLINK,
          payload: movies[movies.length - 1].src,
        };
      }
    }
  }
};

export const addPreviousVideoLink = (dispatch, movies, id) => {
  dispatch(togglePlayVideo(true));
  let previousIndex = 0;
  for (let movie of movies) {
    if (movie.id === id) {
      let currentIndex = movies.indexOf(movie);
      if (currentIndex > 0) {
        previousIndex = currentIndex - 1;
        dispatch(addCurrentVideoId(movies[previousIndex].id));
        dispatch(selectActiveMovie(movies, movies[previousIndex].id));
        movies[previousIndex].videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        return {
          type: ADD_PREVIOUS_VIDEOLINK,
          payload: movies[previousIndex].src,
        };
      } else {
        return { type: ADD_PREVIOUS_VIDEOLINK, payload: movies[0].src };
      }
    }
  }
};

export const addCurrentVideoId = (id) => {
  return {
    type: ADD_CURRENT_VIDEO_ID,
    payload: id,
  };
};

export const togglePlayVideo = (value) => {
  return {
    type: TOGGLE_PLAY_VIDEO,
    payload: value,
  };
};
export const toggleLoopVideo = (value) => {
  return {
    type: TOGGLE_LOOP_VIDEO,
    payload: !value,
  };
};

export const toggleSuffle = (value) => {
  return {
    type: TOGGLE_SHUFFLE,
    payload: !value,
  };
};

export const addRefToCurrentVideo = (reference) => {
  return {
    type: ADD_REF_TO_CURRENT_VIDEO,
    payload: reference,
  };
};
