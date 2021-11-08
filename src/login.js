import React from 'react'
import './login.css'

 function Login() {
    return (
        <div className="login">
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h4>E-mail</h4>
                    <input type="email"></input>
                    <h4>Password</h4>
                    <input type="password"></input>
                    <button type="submit" className="login_Submitbutton">Login</button>
                </form>
            </div>
            
        </div>
    )
}
export default Login