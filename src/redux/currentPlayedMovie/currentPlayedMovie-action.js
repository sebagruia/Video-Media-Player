export const ADD_CURRENT_VIDEOLINK = "ADD_CURRENT_VIDEOLINK";
export const TOGGLE_LOOP_VIDEO = "TOGGLE_LOOP_VIDEO";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const ADD_REF_TO_CURRENT_VIDEO = "ADD_REF_TO_CURRENT_VIDEO";


export const addCurrentVideoLink = (videoLink)=>{
    return{
        type:ADD_CURRENT_VIDEOLINK,
        payload:videoLink
    }
}

export const toggleLoopVideo = (value)=>{
    return{
        type:TOGGLE_LOOP_VIDEO,
        payload:!value
    }
}
export const toggleSuffle = (value)=>{
    return{
        type:TOGGLE_SHUFFLE,
        payload:!value
    }
}
export const addRefToCurrentVideo = (reference)=>{
    return{
        type:ADD_REF_TO_CURRENT_VIDEO,
        payload:reference
    }
}