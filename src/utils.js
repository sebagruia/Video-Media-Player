import {
  addCurrentVideoLink,
  addCurrentVideoId,
} from "./redux/currentPlayedMovie/currentPlayedMovie-action";
import {selectActiveMovie} from "./redux/movies/movie-action";


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

export const autoplayNext = (dispatch, allVideosRefs, movies, id) => {
  for (let i = 0; i < allVideosRefs.length; i++) {
    if (allVideosRefs[i].current.id === id) {
      let j = i + 1;
      if (j < allVideosRefs.length) {
        dispatch(addCurrentVideoLink(allVideosRefs[j].current.currentSrc));
        dispatch(addCurrentVideoId(allVideosRefs[j].current.id));
        dispatch(selectActiveMovie(movies, allVideosRefs[j].current.id));
        allVideosRefs[j].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      } else {
        return;
      }
    }
  }
};


 // const refToVideoActive = refs.filter((ref) => ref.current.id === movie.id);
      // refToVideoActive[0].current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center",
      //   inline: "nearest",
      // });