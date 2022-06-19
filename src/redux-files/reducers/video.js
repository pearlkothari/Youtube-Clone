import { VIDEOS_FAILED, VIDEOS_REQUEST, VIDEOS_SUCCESS, VIDEO_SELECTED_FAILED, VIDEO_SELECTED_REQUEST, VIDEO_SELECTED_SUCCESS } from "../video.Actions";

export const videoReducer=(
    prevState={
        videos:[],
        loading:false,
        nextPageToken:null,
        category:'All'
    },action)=>{
        const {type,payload}=action;
        switch(type){
            case VIDEOS_FAILED:
                return{
                    ...prevState,
                    loading:false,
                    error:payload
                }
            case VIDEOS_SUCCESS:
                return{
                    ...prevState,
                    videos:prevState.category===payload.category?[...prevState.videos,...payload.videos]:payload.videos,
                    loading:false,
                    nextPageToken:payload.nextPageToken,
                    category:payload.category
                }
            case VIDEOS_REQUEST:
                return{
                    ...prevState,
                    loading:true
                }
            default:
                return prevState;
        }

}
export const _metaReducer=(
    prevState={
        _meta:[],
        loading:false
    },action)=>{
        const {type,payload}=action;
        switch(type){
            case VIDEO_SELECTED_REQUEST:
                return {
                    ...prevState,
                    loading:true
                }
            case VIDEO_SELECTED_SUCCESS:
                return{
                    ...prevState,
                    _meta:payload.meta_,
                    loading:false
                }
            case VIDEO_SELECTED_FAILED:
                return{
                    ...prevState,
                    loading:false,
                    error:payload
                }
            default:
                return prevState
        }
}
