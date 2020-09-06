import React from "react";
import "./list.css";
import { connect } from "react-redux";
import Video from "../Video/video";

const List = ({ movies, shuffleValue, shuffledMovies }) => {
  return (
    <div className="list">
      {shuffleValue
        ? shuffledMovies.map((movie) => (
            <Video
              key={movie.id}
              videoLink={movie.src}
              id={movie.id}
              active={movie.active}
            />
          ))
        : Object.values(movies).map((movie) => (
            <Video
              key={movie.id}
              videoLink={movie.src}
              id={movie.id}
              active={movie.active}
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
