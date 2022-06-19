import { CHANNEL_FAILED, CHANNEL_REQUEST, CHANNEL_SUCCESS } from "../channel.Actions"

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