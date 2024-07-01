import React, { useState } from 'react';
import './Login.css';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import user_icon from '../../assets/person.png';
import logo from '../../assets/logo.png'; // Adjust the path to your logo

function Login() {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='login-container'>
            <div className="login-box">
                <div className="login-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="login-header">
                    <div className="login-text">{action.toUpperCase()}</div>
                    <div className="login-underline"></div>
                </div>
                <div className="login-inputs">
                    {action === "Login" ? null : (
                        <div className="login-input">
                            <img src={user_icon} alt="User Icon" />
                            <input type="text" placeholder='Username' />
                        </div>
                    )}
                    <div className="login-input">
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" placeholder='Email' />
                    </div>
                    <div className="login-input">
                        <img src={password_icon} alt="Password Icon" />
                        <input type="password" placeholder='Password' />
                    </div>
                </div>
                {action === "Sign Up" ? null : (
                    <div className="login-forgot-password">
                        Forgot Password? <span>Click here</span>
                    </div>
                )}
                <div className="login-submit-container">
                    <div
                        className={action === "Login" ? "login-submit login-gray" : "login-submit"}
                        onClick={() => setAction("Sign Up")}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === "Sign Up" ? "login-submit login-gray" : "login-submit"}
                        onClick={() => setAction("Login")}
                    >
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
