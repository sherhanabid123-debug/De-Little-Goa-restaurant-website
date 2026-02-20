import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SiZomato } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        <span className="logo-text" style={{ color: 'white' }}>De Little</span>
                        <span className="logo-accent">Goa</span>
                    </a>
                    <p className="footer-desc">
                        Your destination for authentic Goan coastal dining in Calangute. We bring the freshest seafood and traditional spices to your table.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#menu">Our Menu</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#reviews">Testimonials</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4 className="footer-title">Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/delittlegoa/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://www.zomato.com/goa/de-little-goa-kitchen-bar-calangute" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <SiZomato style={{ transform: 'scale(1.8)' }} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} De Little Goa Kitchen & Bar. All Rights Reserved.</p>
                <p className="footer-credits">Made with <span style={{ color: '#E76F51' }}>♥</span> in Goa</p>
            </div>
        </footer>
    );
};

export default Footer;
