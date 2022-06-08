import React from 'react'
import './Login.scss';

function Login() {
  return (
    <button className="Login" type="submit" onClick={()=>{
        console.log("Hello");
    }}>SIGN IN</button>
  )
}

export default Login