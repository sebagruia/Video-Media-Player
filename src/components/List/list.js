import React from "react";
import "./list.css";
import { connect } from "react-redux";
import Video from "../Video/video";

const List = ({ movies, shuffleValue, shuffledMovies }) => {
  const shuffleMoviesLength = Object.values(shuffledMovies).length;
  return (
    <div className="list">
      {shuffleValue && shuffleMoviesLength > 0
        ? Object.values(shuffledMovies).map((movie) => (
            <Video
              key={`${movie.id}${new Date().getTime()}`}
              videoLink={movie.src}
              id={movie.id}
              active={movie.active}
            />
          ))
        : Object.values(movies).map((movie) => (
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
    shuffledMovies: state.moviesReducer.shuffledMovies,
    
  };
};
export default connect(mapStateToProps)(List);
