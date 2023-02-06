import React from 'react'
import Logo from './images/logo.png'
import './css/Header.css';
import { NavLink, useLocation } from 'react-router-dom';

function Header(props) {
    const pathname = useLocation().pathname.slice(1);
    const handleClickScroll = () => {
        const element = document.getElementById('learning');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <header className={`custom_header ${(pathname === "contact" || pathname === "testimonials" || pathname === "blogs" || 
            pathname === "blog-details" || pathname === "terms-and-conditions" ? "bg-white" : "")}`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="logo" to="/home">
                            <img src={Logo} className="img-fluid" alt="Logo" />
                        </NavLink>
                        <button className="navbar-toggler open_header_click collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fas fa-bars hameburgerIcon"></i>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse mainHeader" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item showMobile">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/community">Community</NavLink>
                                </li>
                                <li className="nav-item showMobile">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/community-fee">Community Fee</NavLink>
                                </li>
                                <li className="nav-item nav__menu-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active nav__menu-item" : "nav-link nav__menu-item")} to="/community">Community</NavLink>
                                    <ul className="nav__submenu">
                                        <li className="nav__submenu-item ">
                                            <NavLink className={({ isActive }) => (isActive ? "nav-link active nav__menu-item" : "nav-link nav__menu-item")} to="/community-fee">Community Fee</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link" : "nav-link")} to="./home#learning" onClick={handleClickScroll}>Learning Center</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/testimonials">Testimonials</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/blogs">Blog</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
