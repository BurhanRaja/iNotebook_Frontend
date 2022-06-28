import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
// import getuserContext from '../context/users/getuserContext';

const Navbar = () => {

    // const context = useContext(getuserContext)
    // const { getUser} = context

    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    // useEffect(() => {
    //     getUser()
    // }, [])
    

    // To Highlight the page name on navbar
    const location = useLocation()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="text-center">
                            <Link className="btn btn-outline-info mx-2" to='/login'>Login</Link>
                            <Link className="btn btn-outline-info mx-2" to='/SignUp'>SignUp</Link>
                    </form> : <>
                    <button className="btn btn-outline-info mx-2" onClick={handleLogout}>Logout</button> </>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
