import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({setUser, setIsAuthenticated}) {
    const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  console.log('loginData: ', loginData);

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(loginData => ({...loginData, [name]: value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([])
    if(confirmPassword !== loginData.password){
      alert("Passwords dont' match!")
    }

    fetch('/users',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify(loginData)
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setUser(user)
          setIsAuthenticated(true)
        })
      } else{
        r.json()
        .then(json => setErrors(json.errors))
      }
    })
  }


    return(
        <div className='login-form-box'>
            <h2>Returning Users Log In Here!</h2>
            <form onSubmit={handleSubmit}>
                <label>Username
                <input type='text' name='username' onChange={handleChange} value={loginData.username}></input>
                </label>
                <label>Password
                <input type='password' name='password' onChange={handleChange} value={loginData.password}></input>
                </label>
                <input type="submit" value="Login!" className='login-button'/>
            </form>
            {errors ? errors.map(e => <div>{e}</div> ) : null}
        </div>
    )
}

export default LoginForm;