import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        postalCode: '',
        services: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
        // Logic to handle registration
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="services">Services</label>
                        <input
                            type="text"
                            id="services"
                            name="services"
                            value={formData.services}
                            onChange={handleChange}
                          
                        />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
