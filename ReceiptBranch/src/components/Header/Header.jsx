import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">
                        <img
                            src={logo}
                            className="logo-img"
                            alt="Logo"
                        />
                    </Link>
                    <div className="nav-links">
                        <ul className="nav-list">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `nav-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `nav-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `nav-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `nav-item ${isActive ? "active" : ""}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="auth-buttons">
                        <Link
                            to="/login"
                            className="login-button"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/login"
                            className="signup-button"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
