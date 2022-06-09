import { _FAILED, _PROFILE, _REQUEST, _SUCCESS } from "../Actions";

export const authReducer = (
    prevState={
        accessToken:sessionStorage.getItem('app-accessToken')?sessionStorage.getItem('app-accessToken'):null,
        user:sessionStorage.getItem('app-user')?JSON.parse(sessionStorage.getItem('app-user')):null,
        loading:false
    },action)=>{

    const {type,payload}=action;
    switch(type){
        case _REQUEST:
            return {
                ...prevState,
                loading:true
            }
        case _SUCCESS:
            return {
                ...prevState,
                accessToken:payload,
                loading:false
            }
        case _FAILED:
            return{
                ...prevState,
                accessToken:null,
                loading:false
            }
        case _PROFILE:
            return{
                ...prevState,
                user:payload
            }
        default:
            return prevState
    }
}