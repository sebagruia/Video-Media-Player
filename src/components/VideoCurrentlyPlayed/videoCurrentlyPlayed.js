import React, { useEffect, useRef } from "react";
import "./videoCurrentlyPlayed.css";
import { connect } from "react-redux";
import { addRefToCurrentVideo } from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { autoplayNext } from "../../utils";

const VideoCurrentlyPlayed = ({
  dispatch,
  currentVideoLink,
  loopValue,
  movies,
  id,
  allVideosRefs,
}) => {
  const refToCurrentVideo = useRef(null);
  useEffect(() => {
    dispatch(addRefToCurrentVideo(refToCurrentVideo));
  }, [dispatch]);

  return (
    <video
      onEnded={() => autoplayNext(dispatch, allVideosRefs, movies, id)}
      className="video"
      width="100%"
      height="auto"
      controls
      autoPlay
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
    id: state.currentMovieReducer.id,
    allVideosRefs: state.videoReducer.allVideosRefs,
  };
};

export default connect(mapStateToProps)(VideoCurrentlyPlayed);
