import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const Navbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [collapsed, setCollapsed] = useState(true);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            console.log("Please enter a search term");
            return;
        }
        onSearch(searchTerm);
        setSearchTerm('');
        navigate(`/search-results?query=${searchTerm}`);
    };

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const closeNavbar = () => {
        setCollapsed(true);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id='navbar'>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">D-Florist</a>
                <button className="navbar-toggler"
                    type="button"
                    // data-bs-toggle="collapse"
                    // data-bs-target="#navbarSupportedContent"
                    // aria-controls="navbarSupportedContent"
                    // aria-expanded={!collapsed ? 'true' : 'false'}
                     aria-label="Toggle navigation"
                    onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"  onClick={closeNavbar}>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item"  onClick={closeNavbar}>
                            <Link className="nav-link active" aria-current="page" to="/About">Gallery</Link>
                        </li>
                        <li className="nav-item"  onClick={closeNavbar}>
                            <Link className="nav-link active" aria-current="page" to="/Product">Product</Link>
                        </li>
                        <li className="nav-item"  onClick={closeNavbar}>
                            <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex my-lg-0 my-3" onSubmit={handleSearch}>
                        <input
                            className="form-control me-2"
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search"
                        />
                        {/* <button className="btn" type="submit" onClick={closeNavbar}>
                            Search
                        </button> */}
                    </form>
                    <Link className="btn mx-lg-2" style={{ background: 'darkorchid', borderRadius: '15px', color: 'white' }} aria-current="page"  onClick={closeNavbar} to="/Cart">Cart</Link>

                    {/* <a href='/Cart' className="btn mx-lg-2" style={{ background: 'darkslateblue', borderRadius: '15px', color: 'ButtonText' }}>Cart</a> */}
                </div>
            </div>
        </nav>
    )
}
