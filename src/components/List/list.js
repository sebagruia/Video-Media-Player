import React from "react";
import "./list.css";
import { connect } from "react-redux";
import Video from "../Video/video";

const List = ({ movies, shuffleValue }) => {

  return (
    <div className="list">
      {Object.values(movies).map((movie) => (
        <Video
          key={`${movie.id}${new Date().getTime()}`}
          videoLink={movie.src}
          id={movie.id}
          active={movie.active}
          playStatus={movie.playStatus}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    shuffleValue: state.currentMovieReducer.shuffleValue,
  };
};
export default connect(mapStateToProps)(List);
