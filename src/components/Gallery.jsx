import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        "/assets/official-4.jpg", // Interior
        "/assets/official-1.jpg", // Prawns Rawa
        "/assets/official-2.jpg", // Cocktails
        "/assets/official-5.jpg", // Exterior
        "/assets/official-3.jpg", // Dishes
        "/assets/official-4.jpg", // Seating
    ];

    return (
        <section className="gallery-section section-padding" id="gallery">
            <div className="container">

                <div className="menu-header" style={{ marginBottom: '2rem' }}>
                    <span className="subtitle" style={{ textAlign: 'center' }}>Moments @ De Little Goa</span>
                    <h2 className="section-title">Experience the Vibe</h2>
                </div>

                <div className="gallery-grid">
                    {images.map((src, index) => (
                        <div className={`gallery-item item-${index + 1}`} key={index}>
                            <img src={src} alt={`Gallery Image ${index + 1}`} className="gallery-img" />
                            <div className="gallery-overlay">
                                <span className="zoom-icon">+</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
