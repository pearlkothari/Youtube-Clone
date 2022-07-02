import { ALL_SUBSCRIPTION_FAILED, ALL_SUBSCRIPTION_REQUEST, ALL_SUBSCRIPTION_SUCCESS, CHANNEL_FAILED, CHANNEL_REQUEST, CHANNEL_SUCCESS, SUBSCRIPTION_FAILED, SUBSCRIPTION_REQUEST, SUBSCRIPTION_SUCCESS } from "../channelActions.js";

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

export const SubscriptionByIdReducer=(
    prevState={
        loading:false,
        isSubscribed:false,
        subscriptionId:null,
        error:''
    },action)=>{
        const {type,payload}=action;
        // console.log(payload);
        switch(type){
            case SUBSCRIPTION_REQUEST:
                return {
                    ...prevState,
                    loading:true
                }
            case SUBSCRIPTION_SUCCESS:
                return {
                    ...prevState,
                    loading:false,
                    isSubscribed:payload.isSubscribed,
                    subscriptionId:payload.subscriptionId,
                    error:""
                }
            case SUBSCRIPTION_FAILED:
                return {
                    ...prevState,
                    loading:false,
                    error:payload
                }
            default:
                return prevState
        }
}

export const SubscriptionReducer=(
    prevState={
        nextPageToken:null,
        subscriptions:[],
        loading:false,
        totalResults:-1,
        error:''
    },action)=>{
        const {type,payload}=action;

        switch(type){
            case ALL_SUBSCRIPTION_REQUEST:
                return {
                    ...prevState,
                    loading:true
                }
            case ALL_SUBSCRIPTION_SUCCESS:
                return {
                    ...prevState,
                    loading:false,
                    subscriptions:[...prevState.subscriptions,...payload.subscriptions],
                    nextPageToken:payload.nextPage,
                    totalResults:payload.totalResults,
                    error:''
                }
            case ALL_SUBSCRIPTION_FAILED:
                return{
                    ...prevState,
                    error:payload
                }
            default:
                return prevState
        }
}