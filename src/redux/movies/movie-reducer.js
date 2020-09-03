import {GET_MOVIES, SELECT_ACTIVE_MOVIE} from "./movie-action";

const initialState = {
    movies:"",

}

export const moviesReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state, movies:action.payload
            }
        case SELECT_ACTIVE_MOVIE:
            return{
                ...state, movies:action.payload
            }
            default:
                return state;
    }
}