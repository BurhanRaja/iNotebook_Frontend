import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import loginpic from "../assets/Login-signup.png"
import "../css/login.css"

const Login = (props) => {

    // Using useState to pass the data for login
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const host = "http://localhost:5000"

    let navigate = useNavigate()
    
    // Login by submitting form
    const handleLogin = async (e) => {
        e.preventDefault()
        // For server side
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const jsonRes = await response.json()
        console.log(jsonRes)

        if (jsonRes.success) {
            localStorage.setItem('token', jsonRes.authToken)
            navigate("/")
            props.showAlerts("You have successfully logged in", "success")
        }
        else {
            props.showAlerts("Invalid Credentials", "warning")
        }
    }

    // To edit form
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-5 loginContainer'>
                <img className='loginImage' src={loginpic} alt="something"/>
            <form onSubmit={handleLogin} className="loginForm">
            <h2 className='text-center'>Login</h2>
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
                    <button type="submit" className="btn btn-primary my-2" >Login</button>
                    <p>Or</p>
                    <Link className="btn btn-outline-primary" to="/signUp">Create an Account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login