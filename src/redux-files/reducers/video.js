import { VIDEOS_FAILED, VIDEOS_REQUEST, VIDEOS_SUCCESS } from "../Video.Actions";

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