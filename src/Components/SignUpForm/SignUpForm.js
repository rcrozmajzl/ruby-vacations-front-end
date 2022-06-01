import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUpForm.css';

function SignUpForm({setUser, setIsAuthenticated}) {
  const history = useHistory()
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [signupData, setSignupData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setSignupData(signupData => ({...signupData, [name]: value}) )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([])
    if(confirmPassword !== signupData.password){
      alert("Passwords dont' match!")
    }

    fetch('/users',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify(signupData)
    })
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setUser(user)
          setIsAuthenticated(true)
          history.push('/availablehouses')
        })
      } else{
        r.json()
        .then(json => setErrors(json.errors))
      }
    })
  }

  return (
    <div className='signup-form-box'>
      <h2>New Users Sign Up Here!</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input type='text' name='name' onChange={handleChange} value={signupData.name}></input>
        </label>
        <label>Username:
          <input type='text' name='username' onChange={handleChange} value={signupData.username}></input>
        </label>
        <label>Email:
          <input type='text' name='email' onChange={handleChange} value={signupData.email}></input>
        </label>
        <label>Password:
          <input type='password' name='password' onChange={handleChange} value={signupData.password}></input>
        </label>
        <label>Confirm Password:
          <input type='password' onChange={e => setConfirmPassword(e.target.value)}></input>
        </label>
        <input type="submit" className='login-button' value='Signup'/>
      </form>
      {errors ? errors.map(e => <p>{e}</p> ) : null}
    </div>
  )
}

export default SignUpForm;