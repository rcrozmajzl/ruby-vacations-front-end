import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';
import SignUpForm from '../SignUpForm/SignUpForm.js';


function LoginSignUpPage({ setUser, setIsAuthenticated }) {

    return (
        <div>
            <h1>Login & Signup Form Page</h1>
            <div>
                <LoginForm/>
            </div>
            <div>
                <SignUpForm setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
            </div>
        </div>
    )
}

export default LoginSignUpPage;