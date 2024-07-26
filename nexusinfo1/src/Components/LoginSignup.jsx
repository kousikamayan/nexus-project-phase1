import React, { useState } from 'react'
import './LoginSignup.css'

function LoginSignUp() {
  const [loginSignup, setLoginsignup]=useState("login")
  const[formData,setFormData]=useState({
    username:"",
    password:"",
    email:""

  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }


  return (
    <div>
            <div className='text-center mt-4'>
      <h1 className='section-title'>Login & SignUp Form!</h1>
      </div>

    <section className='vh-100 d-flex justify-content-center align-items-center form-section'>


     
    <div className='forms'>
      <div className={`form-wrapper ${loginSignup==="login" ? 'is-active':" "}`}>
        <button type='button' className='switcher switcher-login' onClick={()=>setLoginsignup("login")}>Login <span className='underline'></span></button>
        <form className='form form-login'>
          <fieldset>
            <legend>enter email and name</legend>
            <div className="input-block">
              <label htmlFor="login-email">E-mail</label>
              <input id='login-email' type="email" name='email' value={formData.email} onChange={changeHandler} required />
            </div>
            <div className="input-block">
              <label htmlFor="login-password">Password</label>
              <input id='login-password' type="password" name='password'value={formData.password} onChange={changeHandler} required />
            </div>
            
          </fieldset>
          <button type='submit' className='btn-login' >Login</button>
        </form>

      </div>
      <div className={`form-wrapper ${loginSignup==="signup" ? 'is-active':" "}`}>
        <button type='button' className='switcher switcher-signup' onClick={()=>setLoginsignup("signup")} >Sign Up <span className='underline'></span></button>
        <form className='form form-signup'>
          <fieldset>
            <legend>enter email and name</legend>
            <div className="input-block">
              <label htmlFor="signup-username">Username</label>
              <input id='signup-username' type="text" name='username' value={formData.username} onChange={changeHandler} required />
            </div>
            <div className="input-block">
              <label htmlFor="signup-email">E-mail</label>
              <input id='signup-email' type="email" name='email' value={formData.email} onChange={changeHandler} required />
            </div>
            <div className="input-block">
              <label htmlFor="signup-password">Password</label>
              <input id='signup-password' name='password' type="password"value={formData.password} onChange={changeHandler} required />
            </div>
            
          </fieldset>
          <button type='submit' className='btn-signup' >Sign Up</button>
        </form>

      </div>

   
   
    </div>
    </section>
    </div>
  )
}

export default LoginSignUp