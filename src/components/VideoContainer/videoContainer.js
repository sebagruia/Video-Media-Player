import React from "react";
import "./videoContainer.css";
import {connect} from "react-redux";
import VideoCurrentlyPlayed from "../VideoCurrentlyPlayed/videoCurrentlyPlayed";

const VideoContainer = ({currentVideoLink, loopValue})=>{
    return(
        <div className="videoContainer">
            <VideoCurrentlyPlayed currentVideoLink={currentVideoLink} loopValue={loopValue}/>
        </div>
    );
}
const mapStateToProps = (state)=>{
    return{
        currentVideoLink : state.currentMovieReducer.currentVideoLink,
        loopValue:state.currentMovieReducer.loopValue
    }
}
export default connect(mapStateToProps)(VideoContainer);