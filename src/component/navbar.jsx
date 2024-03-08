import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/Home">D-Florist</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex my-lg-0 my-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn" type="submit">Search</button>
                    </form>
                    <Link className="btn mx-lg-2" style={{ background: 'mediumslateblue', borderRadius: '15px', color: 'ButtonText' }} aria-current="page" to="/Cart">Cart</Link>
                    
                    {/* <a href='/Cart' className="btn mx-lg-2" style={{ background: 'darkslateblue', borderRadius: '15px', color: 'ButtonText' }}>Cart</a> */}
                </div>
            </div>
        </nav>
    )
}
