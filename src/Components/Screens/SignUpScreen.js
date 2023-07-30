import React, { useRef } from 'react'
import './SignUpScreen.css';
import {auth} from "../../Firebase.js";
const SignUpScreen = () => {
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const register = (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authuser)=>{
      console.log(authuser);

    }).catch(error =>{
      alert(error.message);
    });

  }
  const signIn = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      passwordref.current.value
    ).then((authuser)=>
    {
      console.log(authuser)
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailref} type="email" placeholder = "Email"/>
        <input ref={passwordref} placeholder = "Password" type="password"/>
        <button type='submit' onClick={signIn} >Sign In</button>
        <h4><span className='signUpScreen__grey'>New to Netflix?  </span> <span className='signUpScreen__link' onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen
