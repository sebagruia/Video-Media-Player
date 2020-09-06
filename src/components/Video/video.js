import React, { useEffect, useRef } from "react";
import "./video.css";
import { connect } from "react-redux";
import {
  addCurrentVideoLink,
  addCurrentVideoId,
  togglePlayVideo,
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { selectActiveMovie } from "../../redux/movies/movie-action";
import { addRefKeyToEveryMovieObject } from "../../utils";

const Video = ({ dispatch, movies, videoLink, id, active }) => {
  const refToVideoInList = useRef(null);

  useEffect(() => {
    addRefKeyToEveryMovieObject(id, refToVideoInList, movies);
  });

  const handleClick = () => {
    dispatch(togglePlayVideo(true));
    dispatch(addCurrentVideoLink(videoLink));
    dispatch(selectActiveMovie(movies, id));
    dispatch(addCurrentVideoId(id));
    refToVideoInList.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <div className="video-element">
      <div className="video-box">
        <video
          ref={refToVideoInList}
          onClick={handleClick}
          className={`video ${active === "true" ? "activeClass" : ""}`}
          width="100%;"
          height="auto"
          role="button"
          preload="metadata"
          active={active}
          id={id}
        >
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <hr className={`hidden ${active === "true" ? "activeHr" : ""}`}></hr>
      </div>
      <div className="video-text">
        <h6>{id}</h6>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    playValue: state.currentMovieReducer.playValue,
  };
};

export default connect(mapStateToProps)(Video);
