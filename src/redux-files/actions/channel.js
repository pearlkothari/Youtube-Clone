import { ALL_SUBSCRIPTION_FAILED, ALL_SUBSCRIPTION_REQUEST, ALL_SUBSCRIPTION_SUCCESS, CHANNEL_FAILED, CHANNEL_REQUEST, CHANNEL_SUCCESS, REMOVE_SUBSCRIPTION_REQUEST, SUBSCRIPTION_FAILED, SUBSCRIPTION_REQUEST, SUBSCRIPTION_SUCCESS } from "../channel.Actions"

const api=require('../../axios/api.js');

export const getChannelById=(id)=> async dispatch =>{
    try {
        dispatch({
            type:CHANNEL_REQUEST
        });
        const response=await api.request('/channels',{
            params:{
                part:'snippet,contentDetails,statistics',
                id:id
            }
        });
        // console.log(response.data.items[0]);
        dispatch({
            type:CHANNEL_SUCCESS,
            payload:{
                channel:response.data.items[0]
            }
        });

    } catch (error) {
        console.log(error.message);
        dispatch({
            type:CHANNEL_FAILED,
            payload:error.message
        })
    }
}

export const getSubscriptionStatus=(id)=> async (dispatch,getState) =>{
    try {
        dispatch({
            type:SUBSCRIPTION_REQUEST
        })

        // console.log(`Bearer ${getState().auth.accessToken}`);
        const response=await api.request('/subscriptions',{
            params:{
               part:'snippet',
               forChannelId:id,
               mine:true 
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`
            }
        });

        // console.log(response);
        dispatch({
            type:SUBSCRIPTION_SUCCESS,
            payload:{
                isSubscribed:response.data.items.length>0?true:false
            }
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type:SUBSCRIPTION_FAILED,
            payload:error.message
        })
    }
}

export const getAllSubscriptions=()=> async (dispatch,getState) =>{
    try {
        dispatch({
            type:ALL_SUBSCRIPTION_REQUEST
        })

        const response =await api.request('/subscriptions',{
            params:{
               part:'snippet',
               mine:true 
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`
            }
        });
        console.log(response);

        dispatch({
            type:ALL_SUBSCRIPTION_SUCCESS,
            payload:{
                subscriptions:response.data.items,
                nextPage:response.data.nextPageToken
            }
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type:ALL_SUBSCRIPTION_FAILED,
            payload:error.message
        })
    }
}