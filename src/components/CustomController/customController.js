import React from "react";
import "./customController.css";
import { connect } from "react-redux";
import {
  toggleLoopVideo,
  toggleSuffle,
  addNextVideoLink,
  addPreviousVideoLink,
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { shuffle, clickPlay, scrollIntoViewFunction } from "../../utils";
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
import AddMediaButton from "../AddMediaButton/addMediaButton";

const CustomController = ({
  dispatch,
  loopValue,
  shuffleValue,
  refToVideo,
  movies,
  id,
}) => {

  const handleClickLoop = () => {
    dispatch(toggleLoopVideo(loopValue));
  };

  const handleClickShuffle = () => {
    const shuffledMovies = shuffle(movies);
    dispatch(toggleSuffle(shuffleValue));
    dispatch(addShuffledMovieList(shuffledMovies));
  };

  const handleClickReload = () => {
    refToVideo.current.load();
  };

  const handleClickNext = () => {
    if (id !== "") {
      dispatch(addNextVideoLink(dispatch, movies, id));
    }
  };
  const handleClickPlay = () => {
    if (movies[id] === undefined) {
      return;
    }
    let playStatus = movies[id].playStatus;
    scrollIntoViewFunction(movies,id,"center");
    clickPlay(dispatch, id, movies, playStatus, refToVideo);
    
  };

  const handleClickPrevious = () => {
    if (id !== "") {
      dispatch(addPreviousVideoLink(dispatch, movies, id));
    }
  };

  return (
    <div className="customController">
      <AddMediaButton />
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
        src={
          movies[id] === undefined
            ? Play
            : !movies[id].playStatus
            ? Play
            : Pause
        }
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
    loopValue: state.currentMovieReducer.loopValue,
    shuffleValue: state.currentMovieReducer.shuffleValue,
    refToVideo: state.currentMovieReducer.refToVideo,
    movies: state.moviesReducer.movies,
    id: state.currentMovieReducer.id,
  };
};

export default connect(mapStateToProps)(CustomController);
