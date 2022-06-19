import { CHANNEL_FAILED, CHANNEL_REQUEST, CHANNEL_SUCCESS } from "../channel.Actions";

export const channelReducer=(
    prevState={
        loading:false,
        channel:[]
    },action)=>{
        const {type,payload}=action;
        // console.log(action);
        switch(type){
            case CHANNEL_REQUEST:
                return {
                    ...prevState,
                    loading:true
                }
            case CHANNEL_SUCCESS:
                return {
                    ...prevState,
                    loading:false,
                    channel:payload.channel
                }
            case CHANNEL_FAILED:
                return {
                    ...prevState,
                    loading:false,
                    error:payload
                }
            default:
                return prevState
        }
}