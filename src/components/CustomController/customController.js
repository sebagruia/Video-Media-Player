import React from "react";
import "./customController.css";
import { connect } from "react-redux";
import {
  toggleLoopVideo,
  toggleSuffle,
  addNextVideoLink,
  addPreviousVideoLink
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import Next from "../../assets/icons/next.png";
import Loop from "../../assets/icons/loop.png";
import LoopOrange from "../../assets/icons/loop-orange.png";
import Shuffle from "../../assets/icons/shuffle.png";
import ShuffleOrange from "../../assets/icons/shuffle-orange.png";
import Reload from "../../assets/icons/reload.png";
import Previous from "../../assets/icons/previous.png";

const CustomController = ({
  dispatch,
  loopValue,
  shuffleValue,
  refToVideo,
  allVideosRefs,
  movies,
  id,
}) => {
  const handleClickLoop = () => {
    dispatch(toggleLoopVideo(loopValue));
  };
  const handleClickShuffle = () => {
    dispatch(toggleSuffle(shuffleValue));
  };
  const handleClickReload = () => {
    refToVideo.current.load();
  };
  const handleClickNext = () => {
    dispatch(addNextVideoLink(dispatch,movies, id, allVideosRefs));
  };
  const handleClickPrevious = () => {
    dispatch(addPreviousVideoLink(dispatch,movies, id, allVideosRefs));
  };

  return (
    <div className="customController">
      <img onClick={handleClickPrevious} src={Previous} alt="prevoius icon" role="button" />

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
        className="small"
      />
      <img onClick={handleClickNext} src={Next} alt="next icon" role="button" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loopValue: state.currentMovieReducer.loopValue,
    shuffleValue: state.currentMovieReducer.shuffleValue,
    refToVideo: state.currentMovieReducer.refToVideo,
    allVideosRefs: state.videoReducer.allVideosRefs,
    movies: state.moviesReducer.movies,
    id: state.currentMovieReducer.id,
  };
};

export default connect(mapStateToProps)(CustomController);
