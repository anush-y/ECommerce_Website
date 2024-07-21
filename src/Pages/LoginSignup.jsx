import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className="loginSignup">
            <div className="loginSignup-container">
                <h1>Signup</h1>
                <div className="loginSignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Password"/>

                </div>
                <button>Continue</button>
                <p className="loginSignup-login">Already have an account? <span>Login</span></p>
                <div className="loginSignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continueing, i agree to the terms of use & privacy policy. </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup