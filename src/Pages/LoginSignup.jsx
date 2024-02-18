import React from 'react'
import './Css/loginSignup.css'
const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className="LoginSignup-Container">
          <h1>Sign Up</h1>
          <div className='LoginSIgnup-fields'>
            <input type='text' placeholder='your name'></input>
            <input type='email' placeholder='Email Address'></input>
            <input type='password' placeholder='Password'></input>
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By Continuing, i agree to the terms of use & privacy policy</p>
          </div>
      </div>

    </div>
  )
}

export default LoginSignup