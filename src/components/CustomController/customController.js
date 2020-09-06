import React from "react";
import "./customController.css";
import { connect } from "react-redux";
import {
  toggleLoopVideo,
  toggleSuffle,
  addNextVideoLink,
  addPreviousVideoLink,
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { shuffle, clickPlay } from "../../utils";
import { addShuffledMovieList } from "../../redux/movies/movie-action";
import Play from "../../assets/icons/play.png";
import Pause from "../../assets/icons/pause.png";
import Next from "../../assets/icons/next.png";
import Loop from "../../assets/icons/loop.png";
import LoopOrange from "../../assets/icons/loop-orange.png";
import Shuffle from "../../assets/icons/shuffle.png";
import ShuffleOrange from "../../assets/icons/shuffle-orange.png";
import Reload from "../../assets/icons/reload.png";
import Previous from "../../assets/icons/previous.png";

const CustomController = ({
  dispatch,
  playValue,
  loopValue,
  shuffleValue,
  refToVideo,
  movies,
  id,
}) => {
  let currentPlayedMovieList = [];
  const shuffledMovies = shuffle(Object.values(movies));

  if (shuffleValue) {
    currentPlayedMovieList = [...shuffledMovies];
  } else {
    currentPlayedMovieList = [...Object.values(movies)];
  }

  const handleClickLoop = () => {
    dispatch(toggleLoopVideo(loopValue));
  };

  const handleClickShuffle = () => {
    dispatch(toggleSuffle(shuffleValue));
    dispatch(addShuffledMovieList(shuffledMovies));
  };

  const handleClickReload = () => {
    refToVideo.current.load();
  };
  const handleClickNext = () => {
    if (id !== "") {
      dispatch(addNextVideoLink(dispatch, currentPlayedMovieList, id));
    }
  };
  const handleClickPlay = () => {
    clickPlay(dispatch, id, playValue, refToVideo);
  };

  const handleClickPrevious = () => {
    if (id !== "") {
      dispatch(addPreviousVideoLink(dispatch, currentPlayedMovieList, id));
    }
  };

  return (
    <div className="customController">
      <img
        onClick={handleClickLoop}
        src={loopValue ? LoopOrange : Loop}
        alt="loop icon"
        className="small"
        role="button"
      />
      <img
        onClick={handleClickShuffle}
        src={shuffleValue ? ShuffleOrange : Shuffle}
        alt="shuffle icon"
        className="small"
        role="button"
      />
      <img
        onClick={handleClickReload}
        src={Reload}
        alt="reload icon"
        role="button"
        className="small reload"
      />
      <img
        onClick={handleClickPrevious}
        className="big"
        src={Previous}
        alt="prevoius icon"
        role="button"
      />
      <img
        onClick={handleClickPlay}
        className="big"
        src={!playValue ? Play : Pause}
        alt="play icon"
        role="button"
      />
      <img
        onClick={handleClickNext}
        className="big"
        src={Next}
        alt="next icon"
        role="button"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    playValue: state.currentMovieReducer.playValue,
    loopValue: state.currentMovieReducer.loopValue,
    shuffleValue: state.currentMovieReducer.shuffleValue,
    refToVideo: state.currentMovieReducer.refToVideo,
    movies: state.moviesReducer.movies,
    id: state.currentMovieReducer.id,
  };
};

export default connect(mapStateToProps)(CustomController);
