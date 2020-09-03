import React, { useEffect, useRef } from "react";
import "./videoCurrentlyPlayed.css";
import { connect } from "react-redux";
import { addRefToCurrentVideo } from "../../redux/currentPlayedMovie/currentPlayedMovie-action";


const VideoCurrentlyPlayed = ({ dispatch, currentVideoLink, loopValue }) => {
  const refToCurrentVideo = useRef(null);
  useEffect(() => {
    dispatch(addRefToCurrentVideo(refToCurrentVideo));
  }, [dispatch]);

  return (
    <video
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

export default connect()(VideoCurrentlyPlayed);
