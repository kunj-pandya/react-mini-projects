import React from "react";
import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <>
            <section id="contact">
                <h1>CONTACT US</h1>
                <p>
                    We’d love to hear from you! Whether you’re looking for your dream home, want to list your property, or simply have a question — our team is here to help.
                </p>
                <p>
                    Reach out to us anytime, and we’ll ensure you get the guidance, support, and information you need to make the right move with confidence.
                </p>
                <div className="container">
                    <img src="/about.jpg" alt="about" />
                    <div className="content">
                        <h3>Let's connect</h3>
                        <div>
                            <p>Phone</p>
                            <span>+91987654321</span>
                        </div>
                        <div>
                            <p>Email</p>
                            <span>kunjpandya@gmail.com</span>
                        </div>
                        <div>
                            <p>Address</p>
                            <span>House No.123 Sector A-1</span>
                        </div>
                        <ul>
                            <Link to={"/"} target="_blank">
                                <RiFacebookBoxLine />
                            </Link>
                            <Link to={"/"} target="_blank">
                                <RiInstagramLine />
                            </Link>
                            <Link to={"/facebook"} target="_blank">
                                <RiTwitterLine />
                            </Link>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
