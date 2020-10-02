import {
  addCurrentVideoLink,
  addCurrentVideoId,
} from "./redux/currentPlayedMovie/currentPlayedMovie-action";
import {togglePlayVideo} from "./redux/movies/movie-action";
import { selectActiveMovie } from "./redux/movies/movie-action";

const getRandomNumber = (min, max) =>
  Math.round(Math.random() * (max - min) + min);


export const shuffle = (object) => {
  const array = [...Object.values(object)];
  const newArray = [];
  const movies = {};

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

  for (let object of shuffledArray) {
    movies[object.id] = object;
  }

  return movies;
};


export const autoplayNext = (dispatch, movies, id) => {
  const moviesArray = Object.values(movies);
  
  for (let i = 0; i < moviesArray.length; i++) {
    if (moviesArray[i].id === id) {
      let j = i + 1;
      if (j < moviesArray.length) {
        dispatch(togglePlayVideo(movies,moviesArray[j].id));
        dispatch(addCurrentVideoLink(moviesArray[j].src));
        dispatch(addCurrentVideoId(moviesArray[j].id));
        dispatch(selectActiveMovie(movies, moviesArray[j].id));
        scrollIntoViewFunction(movies,id,"start");
      } else {
        dispatch(togglePlayVideo(movies,id));
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

export const clickPlay = (dispatch, id, movies, playStatus, refToVideo) => {
  if (id !== "") {
    if (playStatus) {
      refToVideo.current.pause();
      dispatch(togglePlayVideo(movies, id));
    } else {
      refToVideo.current.load();
      dispatch(togglePlayVideo(movies, id));
    }
  }
}

export const scrollIntoViewFunction = (movies,id, position)=>{
  movies[id].videoRef.current.scrollIntoView({
    behavior: "smooth",
    block: position,
    inline: "nearest",
  });
}