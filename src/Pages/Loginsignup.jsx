import React from 'react'
import './Css/LoginSignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">

        <h1>Sigp Up</h1>

        <div className="loginsingup-field">

          <input type='text' placeholder='  your name'/>
          <input type='email' placeholder=' Email Address'/>
          <input type='password' placeholder='password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'> Already have an Accound? <span>Login Here</span></p>

        <div className="loginsingup-agree">
          <input type='checkbox' name='' id=''/>

          <p>By continuing , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default Loginsignup
