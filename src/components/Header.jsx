import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                {/* Logo */}
                <a href="#home" className="logo">
                    <span className="logo-text">De Little</span>
                    <span className="logo-accent">Goa</span>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Action Button & Mobile Toggle */}
                <div className="header-actions">
                    <a href="https://www.zomato.com/goa/de-little-goa-kitchen-bar-calangute" target="_blank" rel="noopener noreferrer" className="btn btn-primary reserve-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                        Order Now
                    </a>
                    <a href="#contact" className="btn btn-outline reserve-btn">
                        <MapPin size={18} style={{ marginRight: '8px' }} /> Find Us
                    </a>
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://www.zomato.com/goa/de-little-goa-kitchen-bar-calangute"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mobile-reserve-btn"
                            style={{ marginBottom: '1rem' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Order Now
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-outline mobile-reserve-btn"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Reserve a Table
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
