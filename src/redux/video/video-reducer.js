import { ADD_REFERENCE_TO_VIDEO_IN_LIST} from "./video-action";

const initialState = {
  refToVideoInList: "",
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REFERENCE_TO_VIDEO_IN_LIST:
      return {
        ...state,
        refToVideoInList: action.payload,
      };
    default:
      return state;
  }
};
