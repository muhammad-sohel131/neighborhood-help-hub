import React from 'react';
import './Home.css';
import banner from '../../assets/banner.jpg'
import { BsPostcard } from "react-icons/bs"
import { GrUserWorker } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <header className="hero-section">
              <img className='banner-img' src={banner} alt="banner image" />
                <h1>Your trusted platform to connect with helpers in your community.</h1>
                <p>Neighborhood Help Hub is dedicated to fostering community connections by empowering individuals to find reliable helpers nearby. We believe in simplicity, security, and collaboration for a better neighborhood.</p>
                <button className="cta-button">Join Us Today</button>
            </header>

            {/* Features Section */}
            <section className="features-section">
                <h2>Our Features</h2>
                <div className="features-container">
                    <div className="feature-card">
                      <BsPostcard className='icon'/>
                        <h3>Post a Task</h3>
                        <p>Share your requirements and let helpers find you.</p>
                    </div>
                    <div className="feature-card">
                        <GrUserWorker className='icon'/>
                        <h3>Find Helpers</h3>
                        <p>Browse profiles of reliable workers in your area.</p>
                    </div>
                    <div className="feature-card">
                        <MdPayment  className='icon'/>
                        <h3>Secure Payments</h3>
                        <p>Safe transactions for both task posters and helpers.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What People Say</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <p>
                            "The platform made it so easy to find a skilled painter for my home.
                            Highly recommended!"
                        </p>
                        <h4>- Sarah M.</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>
                            "I found a great babysitter through this platform. It's been a lifesaver
                            for our family!"
                        </p>
                        <h4>- John D.</h4>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section">
                <h2>How It Works</h2>
                <div className="steps-container">
                    <div className="step-card">
                        <h3>1. Create an Account</h3>
                        <p>Sign up to get started on the platform.</p>
                    </div>
                    <div className="step-card">
                        <h3>2. Post or Find Tasks</h3>
                        <p>Post a task or browse through tasks in your area.</p>
                    </div>
                    <div className="step-card">
                        <h3>3. Get the Job Done</h3>
                        <p>Connect, collaborate, and complete tasks seamlessly.</p>
                    </div>
                </div>
            </section>

            
            
        </div>
    );
};

export default Home;
