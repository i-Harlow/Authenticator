import React from 'react'
import  "../Styles/loginComponent.css"
import Navbar from './Navbar'

function LoginComponent() {
  return (
    
    <div className="login-container">
      <Navbar/>
        <form action="/login" method="POST">
            <h1>Login</h1>
            <div className="input-group">
                <label name="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div className="input-group">
                <label name="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    
  )
}

export default LoginComponent