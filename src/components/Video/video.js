import React from "react";
import "./video.css";
import { connect } from "react-redux";
import { addCurrentVideoLink } from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { selectActiveMovie } from "../../redux/movies/movie-action";

const Video = ({ dispatch, movies, videoLink, id, active }) => {


  const handleClick = () => {
    dispatch(addCurrentVideoLink(videoLink));
   dispatch(selectActiveMovie(movies, id))
  };

  return (
    <video
      onClick={handleClick}
      className={`video ${active ? "activeClass" : ""}`}
      width="100%"
      height="auto"
      role="button"
      preload="metadata"
    >
      <source src={videoLink} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
};

const mapStateToProps = (state)=>{
  return{
      movies : state.moviesReducer.movies,
  }
}

export default connect(mapStateToProps)(Video);
