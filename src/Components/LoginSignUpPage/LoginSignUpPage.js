import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';
import SignUpForm from '../SignUpForm/SignUpForm.js';


function LoginSignUpPage() {

    return (
        <div>
            <div>
                <LoginForm/>
            </div>
            <div>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default LoginSignUpPage;