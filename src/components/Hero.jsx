import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            {/* Background Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="container hero-content">
                <div className="hero-text-box fade-in">
                    <span className="hero-subtitle">Welcome to Goa</span>
                    <h1 className="hero-title">Experience the True Taste of Coastal Paradise</h1>
                    <p className="hero-description">
                        Discover a perfect blend of authentic Goan spices and fresh seafood,
                        served in a vibrant, relaxed beachside atmosphere right in the heart of Calangute.
                    </p>
                    <div className="hero-actions">
                        <a href="#menu" className="btn btn-primary">
                            Explore Our Menu <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#contact" className="btn btn-outline hero-outline-btn">
                            Reserve a Table
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
