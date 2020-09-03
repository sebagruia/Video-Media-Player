import React from "react";
import "./customController.css";
import { connect } from "react-redux";
import {
  toggleLoopVideo,
  toggleSuffle,
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
  reloadValue,
  refToVideo
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

  return (
    <div className="customController">
      <img src={Previous} alt="prevoius icon" role="button" />

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
      <img onClick={handleClickReload} src={Reload} alt="reload icon" role="button" className="small" />
      <img src={Next} alt="next icon" role="button" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loopValue: state.currentMovieReducer.loopValue,
    shuffleValue: state.currentMovieReducer.shuffleValue,
    reloadValue: state.currentMovieReducer.reloadValue,
    refToVideo: state.currentMovieReducer.refToVideo,
  };
};

export default connect(mapStateToProps)(CustomController);
