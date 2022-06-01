import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';
import SignUpForm from '../SignUpForm/SignUpForm.js';
import RubyVacationsLogo from '../assets/RubyVacationsLogo.gif';
import './LoginSignUpPage.css';


function LoginSignUpPage({ setUser, setIsAuthenticated }) {

    return (
        <div className='login-signup-page'>
            {/* <h1 className='login-header'>Welcome to Ruby Vacations!</h1> */}
            <div className='forms-div'>
                <div>
                    <LoginForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
                <img src={RubyVacationsLogo} className="login-logo" alt="logo" />
                <div>
                    <SignUpForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
                </div>
            </div>
            
        </div>
    )
}

export default LoginSignUpPage;