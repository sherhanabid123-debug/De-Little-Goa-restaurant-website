import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-section section-padding" id="about">
            <div className="container about-container">

                {/* Images Grid */}
                <div className="about-images">
                    <img
                        src="/assets/official-4.jpg"
                        alt="Restaurant Ambiance"
                        className="img-main"
                    />
                    <img
                        src="/assets/official-5.jpg"
                        alt="Restaurant Exterior"
                        className="img-accent"
                    />
                </div>

                {/* Text Content */}
                <div className="about-content">
                    <span className="subtitle">Our Story</span>
                    <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>
                        A Little Piece of Goa in Every Bite
                    </h2>
                    <div className="title-underline"></div>

                    <p className="about-text">
                        Nestled in the vibrant heart of Calangute, <strong>De Little Goa Kitchen & Bar</strong> was born out of a passion for authentic coastal flavors and warm Goan hospitality. We bring together traditional recipes passed down through generations, combining them with a modern dining experience.
                    </p>
                    <p className="about-text">
                        Whether you're craving our signature Goan Fish Thali, a rich Crab Xacuti, or simply want to unwind with a cold beverage under the soft glow of our string lights, we've created a cozy oasis just for you. Escape the busy streets and let us treat you to the true taste of paradise.
                    </p>

                    <div className="about-features">
                        <div className="feature-item">
                            <span className="feature-number">10+</span>
                            <span className="feature-label">Years of Culinary Excellence</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-number">100%</span>
                            <span className="feature-label">Fresh Daily Catch</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
