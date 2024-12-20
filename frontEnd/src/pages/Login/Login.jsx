import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
        console.log('Login details:', { phone, password });

        fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                'Content-Type':'Application/json'
            },
            body: JSON.stringify({phone,password})
        })
        .then((res) => res.json())
        .then(user => {
            if(user.length === 0){
                console.log("not correct")
            }else {
                console.log("correct")
                handleLogin();
                navigate("/")
            }
        })
        .catch(e => console.log(e))
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={submitLogin}>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/register">Register here</Link>.
                </p>
            </div>
        </div>
    );
};

export default Login;
