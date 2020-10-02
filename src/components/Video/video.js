import React, { useEffect, useRef } from "react";
import "./video.css";
import { connect } from "react-redux";
import {
  addCurrentVideoLink,
  addCurrentVideoId,
} from "../../redux/currentPlayedMovie/currentPlayedMovie-action";
import { togglePlayVideo } from "../../redux/movies/movie-action";
import { selectActiveMovie } from "../../redux/movies/movie-action";
import { addRefKeyToEveryMovieObject, scrollIntoViewFunction } from "../../utils";
import PlayThin from "../../assets/icons/iconmonstr-play-white.png";
import PauseWhite from "../../assets/icons/iconmonstr-pause-white.png";

const Video = ({
  dispatch,
  movies,
  videoLink,
  id,
  active,
  refToVideo,
  playStatus,
}) => {
  const refToVideoInList = useRef(null);

  useEffect(() => {
    addRefKeyToEveryMovieObject(id, refToVideoInList, movies);
  });

  const handleClick = () => {
    if (movies[id].active === "false") {
      dispatch(addCurrentVideoLink(videoLink));
      dispatch(selectActiveMovie(movies, id));
      dispatch(addCurrentVideoId(id));
    }
    scrollIntoViewFunction(movies,id,"center");

    if (playStatus) {
      refToVideo.current.pause();
      dispatch(togglePlayVideo(movies, id));
    }
    else {
      refToVideo.current.load();
      dispatch(togglePlayVideo(movies, id));
    }
  };

  return (
    <div className="video-element">
      <div
        className={`video-box ${active === "true" ? "activeClass" : ""}`}
        onClick={handleClick}
      >
        <video
          ref={refToVideoInList}
          className="video"
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
        <div className={`video-element-play-pause-container ${active === "true" ? "video-element-position-overwrite" : ""}`}>
          {playStatus && active === "true" ? (
            <img src={PauseWhite} alt="pause thin icon" />
          ) : (
            <img src={PlayThin} alt="play thin icon" />
          )}
        </div>
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
    refToVideo: state.currentMovieReducer.refToVideo,
  };
};

export default connect(mapStateToProps)(Video);
