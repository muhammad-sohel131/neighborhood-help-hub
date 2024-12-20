import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { imageUpload } from '../../util/uploadImg';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        postalCode: '',
        services: '',
        password: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const image = e.target.image.files[0];
        imageUpload(image)
            .then(data => {
                formData.image = data.data.display_url;
                console.log(formData)
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            })
            .catch(e => console.log(e))
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className='fields-container'>
                        <div>

                            <div className="form-group">
                                <label htmlFor="name">Full Name*</label>
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
                                <label htmlFor="phone">Phone*</label>
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
                                <label htmlFor="password">Password*</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="image">Upload Profile Image</label>
                                <input
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                />
                            </div>
                        </div>
                        <div>

                            <div className="form-group">
                                <label htmlFor="postalCode">Postal Code*</label>
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
                                <label htmlFor="services">Services(if you are a worker)</label>
                                <input
                                    type="text"
                                    id="services"
                                    name="services"
                                    value={formData.services}
                                    onChange={handleChange}

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
                                ></textarea>
                            </div>
                        </div>
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
