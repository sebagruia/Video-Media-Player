import { ADD_REFERENCE_TO_VIDEO_IN_LIST, GET_ALL_VIDEOS_REFS } from "./video-action";

const initialState = {
  refToVideoInList: "",
  allVideosRefs:[]
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFERENCE_TO_VIDEO_IN_LIST:
      return {
        ...state,
        refToVideoInList: action.payload,
      };
    case GET_ALL_VIDEOS_REFS:
      return {
        ...state,
        allVideosRefs: [...state.allVideosRefs, action.payload]
      };
    default:
      return state;
  }
};
