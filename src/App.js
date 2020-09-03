import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {getMoviesAction} from "./redux/movies/movie-action";
import {movies} from "./DATA";
import VideoContainer from "./components/VideoContainer/videoContainer";
import ListContainer from "./components/ListContainer/listContainer";



class App extends Component {

  componentDidMount(){
    this.props.getMovies();
  }

  render(){
    return (
      <div className="app-container">
        <VideoContainer />
        <ListContainer />
      </div>
    );
  }
  
}

const mapDispatchToProps = (dispatch)=>{
    return{
      getMovies:()=>dispatch(getMoviesAction(movies))
    }
}

export default connect(null,mapDispatchToProps)(App);
