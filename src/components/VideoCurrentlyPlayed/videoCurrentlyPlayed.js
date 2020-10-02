import React, { useEffect, useRef } from "react";
import "./videoCurrentlyPlayed.css";
import { connect } from "react-redux";
import { addRefToCurrentVideo } from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { autoplayNext } from "../../utils";
import Poster from "../../assets/img/enter.jpg";

const VideoCurrentlyPlayed = ({
  dispatch,
  currentVideoLink,
  loopValue,
  shuffleValue,
  shuffledMovies,
  movies,
  id,
}) => {
  const refToCurrentVideo = useRef(null);

  useEffect(() => {
    dispatch(addRefToCurrentVideo(refToCurrentVideo));
  }, [dispatch]);

  const handleOnEnded = () => {
    if (shuffleValue) {
      autoplayNext(dispatch, shuffledMovies, id);
    } else {
      autoplayNext(dispatch, movies, id);
    }
  };
  
  return (
    <video
      onEnded={handleOnEnded}
      className="video"
      width="100%"
      height="auto"
      controls
      autoPlay
      poster={!id ? Poster : null}
      key={currentVideoLink}
      loop={loopValue}
      ref={refToCurrentVideo}
    >
      <source src={currentVideoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    shuffledMovies: state.moviesReducer.shuffledMovies,
    refToVideo: state.moviesReducer.refToVideo,
    id: state.currentMovieReducer.id,
    shuffleValue: state.currentMovieReducer.shuffleValue,
  };
};

export default connect(mapStateToProps)(VideoCurrentlyPlayed);
