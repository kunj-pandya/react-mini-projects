import React from "react";
import About from "../subComponents/About";

const AboutUs = () => {
    return (
        <section id="aboutPage" className="page">
            <div className="container">
                <img src="/about.jpg" alt="about" />
                <div className="content">
                    <h3>Your peace of mind, our priority!</h3>
                    <p>At Luxora Real Estate, we blend design, comfort, and trust to help you find spaces that truly feel like home.</p>
                    <p>Our platform connects people with premium properties that match their lifestyle, dreams, and expectations.</p>
                    <p>We’re driven by a mission to make real estate experiences effortless, transparent, and inspiring for everyone.</p>
                </div>
            </div>
            <AboutComponentMini />
        </section>                        
    );
};

export default AboutUs;
