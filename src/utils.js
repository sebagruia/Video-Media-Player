import {
  addCurrentVideoLink,
  addCurrentVideoId,
  togglePlayVideo
} from "./redux/currentPlayedMovie/currentPlayedMovie-action";
import { selectActiveMovie } from "./redux/movies/movie-action";

const getRandomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

export const shuffle = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let randomNumber = getRandomNumber(array.length - 1, 0);

    if (newArray.includes(randomNumber)) {
      while (newArray.includes(randomNumber)) {
        randomNumber = getRandomNumber(array.length - 1, 0);
      }
      newArray.push(randomNumber);
    } else {
      newArray.push(randomNumber);
    }
  }
  const shuffledArray = newArray.map((element) => array[element]);

  return shuffledArray;
};

export const autoplayNext = (dispatch, movies, id) => {
  dispatch(togglePlayVideo(true));
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id === id) {
      let j = i + 1;
      if (j < movies.length) {
        dispatch(addCurrentVideoLink(movies[j].src));
        dispatch(addCurrentVideoId(movies[j].id));
        dispatch(selectActiveMovie(movies, movies[j].id));
        movies[j].videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      } else {
        dispatch(togglePlayVideo(false));
        return;
      }
    }
  }
};

export const addRefKeyToEveryMovieObject = (id, ref, movies) => {
  const moviesArray = Object.values(movies);
  for (let i = 0; i < moviesArray.length; i++) {
    if(moviesArray[i].id === id){
      moviesArray[i].videoRef = ref;
    }
  }
};

export const clickPlay = (dispatch, id, playValue, refToVideo) => {
  if (id !== "") {
    if (playValue) {
      refToVideo.current.pause();
      dispatch(togglePlayVideo(!playValue));
    } else {
      refToVideo.current.play();
      dispatch(togglePlayVideo(!playValue));
    }
  }
}

export const scrollIntoView = (movies,index)=>{
  movies[index].videoRef.current.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
}