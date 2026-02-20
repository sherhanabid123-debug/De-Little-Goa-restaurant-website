import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeaturedDishes.css';

const FeaturedDishes = () => {
    const featured = [
        {
            id: 1,
            name: "Golden Fried Prawns",
            desc: "Crispy, perfectly deep-fried prawns served with a creamy garlic mayonnaise dip. A crowd-favorite starter.",
            image: "/assets/official-1.jpg",
        },
        {
            id: 2,
            name: "Fiery Prawn Skewers",
            desc: "Juicy prawns grilled on skewers and generously smothered in our signature fiery, tangy red Goan spice blend.",
            image: "/assets/official-3.jpg",
        },
        {
            id: 3,
            name: "Signature Cocktails",
            desc: "Sip on refreshing, handcrafted tropical drinks expertly mixed to perfectly complement your authentic coastal meal.",
            image: "/assets/official-2.jpg",
        }
    ];

    return (
        <section className="featured-section section-padding">
            <div className="container">
                <div className="menu-header">
                    <span className="subtitle" style={{ textAlign: 'center' }}>Chef's Recommendations</span>
                    <h2 className="section-title">Our Signature Dishes</h2>
                </div>

                <div className="featured-grid">
                    {featured.map((dish) => (
                        <div className="featured-card" key={dish.id}>
                            <div className="featured-img-container">
                                <img src={dish.image} alt={dish.name} className="featured-img" />
                                <div className="featured-overlay">
                                    <button className="btn btn-primary btn-sm">Order Now</button>
                                </div>
                            </div>
                            <div className="featured-content">
                                <h3 className="featured-title">{dish.name}</h3>
                                <p className="featured-desc">{dish.desc}</p>
                                <a href="#menu" className="featured-link">
                                    View in Menu <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDishes;
