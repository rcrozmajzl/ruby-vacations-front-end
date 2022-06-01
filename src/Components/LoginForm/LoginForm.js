import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({setUser, setIsAuthenticated}) {
  const [errors, setErrors] = useState([])
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginData(loginData => ({...loginData, [name]: value}) )
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([])
    if(!loginData)

    fetch('/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({loginData}),
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
        .then(json => setErrors(Object.entries(json.error).flat()))
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
            {/* {errors ? errors.map(e => <div>{e}</div> ) : null} */}
        </div>
    )
}

export default LoginForm;