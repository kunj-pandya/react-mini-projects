import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <footer
                className={isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"}
            >
                <div className='container'>
                    <h4>LUXORA</h4>
                    <p> Luxora Real Estate-designed to deliver a seamless experience for users exploring homes, apartments, and luxury spaces.</p>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/terms'}>Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className='container'>
                    <h4>Connect with us.</h4>
                    <p>+91987654321</p>
                    <p>kunjpandya998@gmail.com</p>
                    <p>© ALl Rights Reserved By Luxora!</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
