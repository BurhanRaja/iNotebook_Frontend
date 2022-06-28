import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import loginpic from "../assets/Login-signup.png"
import "../css/login.css"

const SignUp = () => {
    // Using useState to pass the data for login
    const [credentials, setCredentials] = useState({name:"", email: "", password: ""})
    const host = "http://localhost:5000"
    
    let navigate = useNavigate()

    // Login by submitting form
    const handleSignup= async (e) => {
        e.preventDefault()
        // For server side
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password })
        });

        const jsonRes = await response.json()
        console.log(jsonRes)

        if (jsonRes.success) {
            localStorage.setItem('token', jsonRes.authtoken)
            navigate("/")
        }
        else {
            alert("Invalid Credentials")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container my-5 loginContainer'>
            <img className='loginImage' style={{"margin": "0% 0% 0% 4%"}} src={loginpic} alt="something"/>
            <form className='loginForm' style={{"backgroundColor":"aliceblue", "padding":"30px 30px", "width": "36%"}} onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange} value={credentials.name} minLength={3}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange}value={credentials.password} minLength={5}/>
                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary my-2" >SignUp</button> <br/>
                    <span className='mb-1'>Or</span><br/>
                    <span>If already have an account</span> <br/>
                    <Link className="btn btn-outline-primary my-2" to="/login">Login</Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default SignUp