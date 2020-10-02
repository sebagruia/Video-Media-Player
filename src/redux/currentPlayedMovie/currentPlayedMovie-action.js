import { selectActiveMovie, togglePlayVideo } from "../../redux/movies/movie-action";
import {scrollIntoViewFunction} from "../../utils";
export const ADD_CURRENT_VIDEOLINK = "ADD_CURRENT_VIDEOLINK";
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
  const moviesArray = [...Object.values(movies)];
  let nextIndex = 0;
  
  for (let movie of moviesArray) {
    if (movie.id === id) {
      let currentIndex = moviesArray.indexOf(movie);
      if (currentIndex < moviesArray.length - 1) {
        nextIndex = currentIndex + 1;
        const nextId = moviesArray[nextIndex].id;
        dispatch(togglePlayVideo(movies, nextId));
        dispatch(addCurrentVideoId(nextId));
        dispatch(selectActiveMovie(movies, nextId));
        scrollIntoViewFunction(moviesArray, nextIndex, "end");
        return {
          type: ADD_NEXT_VIDEOLINK,
          payload: moviesArray[nextIndex].src,
        };
      } else {
        const loopId = moviesArray[0].id;
        dispatch(togglePlayVideo(movies, loopId));
        dispatch(addCurrentVideoId(loopId));
        dispatch(selectActiveMovie(movies, loopId));
        scrollIntoViewFunction(moviesArray, 0, "end");
        return {
          type: ADD_NEXT_VIDEOLINK,
          payload: moviesArray[0].src,
        };
      }
    }
  }
};

export const addPreviousVideoLink = (dispatch, movies, id) => {
  const moviesArray = [...Object.values(movies)];
  let previousIndex = 0;

  for (let movie of moviesArray) {
    if (movie.id === id) {
      let currentIndex = moviesArray.indexOf(movie);
      if (currentIndex > 0) {
        previousIndex = currentIndex - 1;
        const previousId = moviesArray[previousIndex].id;
        dispatch(togglePlayVideo(movies, previousId));
        dispatch(addCurrentVideoId(previousId));
        dispatch(selectActiveMovie(movies, previousId));
        scrollIntoViewFunction(moviesArray, previousIndex,"center");
        return {
          type: ADD_PREVIOUS_VIDEOLINK,
          payload: moviesArray[previousIndex].src,
        };
      } else {
        const loopId = moviesArray[moviesArray.length - 1].id;
        dispatch(togglePlayVideo(movies, loopId));
        dispatch(addCurrentVideoId(loopId));
        dispatch(selectActiveMovie(movies, loopId));
        scrollIntoViewFunction(moviesArray, moviesArray.length - 1);
        return {
          type: ADD_PREVIOUS_VIDEOLINK,
          payload: moviesArray[moviesArray.length - 1].src,
        };
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
