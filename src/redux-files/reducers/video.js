import { HV_FAILED, HV_REQUEST, HV_SUCCESS } from "../Video.Actions";

export const videoReducer=(
    prevState={
        videos:[],
        loading:false,
        nextPageToken:null
    },action)=>{
        const {type,payload}=action;
        switch(type){
            case HV_FAILED:
                return{
                    ...prevState,
                    loading:false,
                    error:payload
                }
            case HV_SUCCESS:
                return{
                    ...prevState,
                    videos:payload.videos,
                    loading:false,
                    nextPageToken:payload.nextPageToken
                }
            case HV_REQUEST:
                return{
                    ...prevState,
                    loading:true
                }
            default:
                return prevState;
        }

}