import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import auth from '../../firebase.js';

export const Login = ()=> async dispatch =>{
    try {
        const provider= new firebase.auth.GoogleAuthProvider();

        const response= await auth.signInWithRedirect(provider);
        console.log(response);
    } catch (error) {
        
    }
}