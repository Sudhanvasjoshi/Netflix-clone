import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';
function LoginScreen() {
  const [SignIn, setSignIn] = useState(false);
    return (
    <div className="loginscreen">
        < div className="loginscreen__background">
        <img
        className='login_screen_logo' src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''   />
        <button className="Login_screen_button" onClick={()=>setSignIn(true)}>Sign In</button>
        <div className="login_screen_gradient"/>
        </div>  
        <div className="login_screen__body">
            {SignIn ? (
                <SignUpScreen/>
            ):(
                <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen__input">
                <form>
                    <input type = 'email'
                    placeholder='Email Address'/>
                    <button className='loginScreen__getStarted' onClick={()=>setSignIn(true)} >
                        Get Started
                    </button>
                </form>
            </div>
            </>

            )}

            
        </div>
        </div>
    
  )
}

export default LoginScreen
