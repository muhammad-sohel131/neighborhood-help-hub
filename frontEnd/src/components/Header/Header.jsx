import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import AuthContext from '../../context/AuthContext.jsx';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLogin, handleLogin } = useContext(AuthContext)

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
                        <NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/post-task" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Post a Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profiles" className="nav-item" onClick={() => setMenuOpen(false)}>
                            Profiles
                        </NavLink>
                    </li>
                    <li>
                        {
                            !isLogin ?
                            <NavLink to="/login" className="nav-item" onClick={() => setMenuOpen(false)}>
                                Login
                            </NavLink>
                            :
                            <button onClick={() => handleLogin()} className='logBtn'>Logout</button>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
