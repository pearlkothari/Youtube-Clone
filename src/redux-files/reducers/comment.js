import { GET_COMMENTS_FAILED, GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS } from "../commentActions.js";

export const commentReducer=(
    prevState={
        loading:false,
        nextPageToken:null,
        id:null,
        comment:[],
        error:''
    },action)=>{
       const {type,payload}=action;
       
       switch(type){
            case GET_COMMENTS_REQUEST:
                return {
                    ...prevState,
                    nextPageToken:payload.id===prevState.id?prevState.nextPageToken:null,
                    comment:payload.id===prevState.id?prevState.comment:[],
                    error:'',
                    loading:true
                }
            case GET_COMMENTS_SUCCESS:
                return {
                    ...prevState,
                    loading:false,
                    nextPageToken:payload.nextPageToken,
                    comment:[...prevState.comment,...payload.comments],
                    id:payload.id,
                    error:''
                }
            case GET_COMMENTS_FAILED:
                return {
                    ...prevState,
                    loading:false,
                    error:payload
                }
            default:
                return prevState
       }
}