import {
  ADD_CURRENT_VIDEOLINK,
  TOGGLE_LOOP_VIDEO,
  TOGGLE_SHUFFLE,
  ADD_REF_TO_CURRENT_VIDEO
} from "./currentPlayedMovie-action";

const initialState = {
  currentVideoLink: null,
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
