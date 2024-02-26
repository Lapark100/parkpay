import React, { useState } from "react";

export default function SignUp () {

    const [action, setAction] = useState("Login");
    return  (
     
    <div className="sign-up-container">
    
    <div className="header">
    <div className="text">{action}</div> 
    </div>
    <div className="inputs">
    <div className={action === "Login"? "hide": "input"}>
    {action === "Login"? <div></div> : <input type='text' placeholder="Full Name"></input>}
    </div>
    <div className="input">
    <input type='email' placeholder="E-mail"></input>
    </div>
    <div className="input">
    <input type='password' placeholder="Password"></input>
    </div>
    </div>
    <div className="sign-up-container-1">
    {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password?<span>Click Here</span></div>}
    <div className="submit-container">
    <div className={action === "Login"? "submit gray": "submit"} onClick={function () {return setAction('Sign Up')}}> Sign Up</div>
    <div className={action === "Sign Up"? "submit gray": "submit"} onClick={function () {return setAction('Login')}}> Login</div>    
    </div>
    </div>

    </div>
    )
    
}