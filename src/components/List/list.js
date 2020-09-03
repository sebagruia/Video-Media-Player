import React from "react";
import "./list.css";
import { connect } from "react-redux";
import Video from "../Video/video";
import { shuffle } from "../../utils";

const List = ({ movies, shuffleValue }) => {
  const shuffledList = shuffle(Object.values(movies));
  return (
    <div className="list">
      {shuffleValue
        ? shuffledList.map((movie) => (
            <Video key={movie.id} videoLink={movie.src} id={movie.id} active={movie.active}/>
          ))
        : Object.values(movies).map((movie) => (
            <Video key={movie.id} videoLink={movie.src} id={movie.id} active={movie.active}/>
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
