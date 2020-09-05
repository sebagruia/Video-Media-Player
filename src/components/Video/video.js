import React, {useEffect, useRef } from "react";
import "./video.css";
import { connect } from "react-redux";
import {
  addCurrentVideoLink,
  addCurrentVideoId,
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { selectActiveMovie } from "../../redux/movies/movie-action";
import { addRefToVideoInList, getAllVideosRefs } from "../../redux/video/video-action";


const Video = ({ dispatch, movies, videoLink, id, active, allVideosRefs, refToVideo }) => {
  const refToVideoInList = useRef(null);

  useEffect(()=>{
    dispatch(getAllVideosRefs(refToVideoInList))
  },[dispatch]);

  const handleClick = () => {
    dispatch(addCurrentVideoLink(videoLink));
    dispatch(selectActiveMovie(movies, id));
    dispatch(addCurrentVideoId(id));
    dispatch(addRefToVideoInList(refToVideoInList));
    refToVideoInList.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <video
      ref={refToVideoInList}
      onClick={handleClick}
      className={`video ${active === "true" ? "activeClass" : ""}`}
      width="100%"
      height="auto"
      role="button"
      preload="metadata"
      active={active}
      id={id}
    >
      <source src={videoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    // allVideosRefs: state.videoReducer.allVideosRefs,
    refToVideo:state.currentMovieReducer.refToVideo
  };
};

export default connect(mapStateToProps)(Video);
