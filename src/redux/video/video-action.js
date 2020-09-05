export const ADD_REFERENCE_TO_VIDEO_IN_LIST = "ADD_REFERENCE_TO_VIDEO_IN_LIST";
export const GET_ALL_VIDEOS_REFS = "GET_ALL_VIDEOS_REFS";

export const addRefToVideoInList = (ref)=>{
    return{
        type:ADD_REFERENCE_TO_VIDEO_IN_LIST,
        payload:ref
    }
}
export const getAllVideosRefs = (ref)=>{
    return{
        type:GET_ALL_VIDEOS_REFS,
        payload:ref
    }
}

