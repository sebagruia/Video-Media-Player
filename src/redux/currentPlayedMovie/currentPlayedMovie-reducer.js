import {
  ADD_CURRENT_VIDEOLINK,
  TOGGLE_PLAY_VIDEO,
  TOGGLE_LOOP_VIDEO,
  TOGGLE_SHUFFLE,
  ADD_REF_TO_CURRENT_VIDEO,
  ADD_NEXT_VIDEOLINK,
  ADD_PREVIOUS_VIDEOLINK,
  ADD_CURRENT_VIDEO_ID
} from "./currentPlayedMovie-action";

const initialState = {
  id:"",
  currentVideoLink: null,
  playValue:false,
  loopValue: false,
  shuffleValue: false,
  refToVideo:null
};

export const currentMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_VIDEOLINK:
      return {
        ...state,
        currentVideoLink: action.payload,
      };
    case ADD_NEXT_VIDEOLINK:
      return {
        ...state,
        currentVideoLink: action.payload,
      };
    case TOGGLE_PLAY_VIDEO:
      return {
        ...state,
        playValue: action.payload,
      };
    case ADD_PREVIOUS_VIDEOLINK:
      return {
        ...state,
        currentVideoLink: action.payload,
      };
    case ADD_CURRENT_VIDEO_ID:
      return {
        ...state,
        id: action.payload,
      };
    case TOGGLE_LOOP_VIDEO:
      return {
        ...state,
        loopValue: action.payload,
      };
    case TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffleValue: action.payload,
      };
    case ADD_REF_TO_CURRENT_VIDEO:
      return {
        ...state,
        refToVideo: action.payload,
      };
    default:
      return state;
  }
};
