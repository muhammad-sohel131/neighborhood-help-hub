import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>Neighborhood Help Hub</h1>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <span className="close-icon">&#10005;</span> : <span className="hamburger-icon">&#9776;</span>}
            </div>
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <Link to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Tasks
                        </Link>
                    </li>
                    <li>
                        <Link to="/post-task" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Post a Task
                        </Link>
                    </li>
                    <li>
                        <Link to="/profiles" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Profiles
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
