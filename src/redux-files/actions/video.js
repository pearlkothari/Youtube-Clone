import { HV_REQUEST, HV_SUCCESS,HV_FAILED } from "../Video.Actions"
const api=require('../../axios/api.js');

export const getMostPopularVideos = ()=> async dispatch=>{
    try {
        dispatch({
            type:HV_REQUEST
        })
        const response= await api.request.get('/videos',{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:20
            }
        })
        
        dispatch({
            type:HV_SUCCESS,
            payload:{
                videos:response.data.items,
                nextPageToken:response.data.nextPageToken
            }
        })
    } catch (err) {
        console.log(err.message);
        dispatch({
            type:HV_FAILED,
            payload:err.message
        })
    }
}
