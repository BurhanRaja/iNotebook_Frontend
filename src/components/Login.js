import React, { useState } from 'react'
import loginpic from "../assets/Login-signup.png"
import "../css/login.css"

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const host = "http://localhost:5000"
    
    const handleLogin = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const jsonRes = await response.json()
        console.log(jsonRes)
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-5 loginContainer'>
                <img className='loginImage' src={loginpic} alt="something"/>
            <form onSubmit={handleLogin} className="loginForm">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} />
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login