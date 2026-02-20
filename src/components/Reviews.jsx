import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Rahul Sharma",
            date: "2 weeks ago",
            text: "Absolutely the best Goan Fish Thali I've had in Calangute! The ambiance under the trees is just perfect. Very friendly staff too.",
            rating: 5
        },
        {
            id: 2,
            name: "Priya Menon",
            date: "1 month ago",
            text: "A hidden gem! It's away from the crowded streets, offering a calm and wonderful dining experience. The prawn rawa fry is a must-try.",
            rating: 5
        },
        {
            id: 3,
            name: "James D.",
            date: "3 months ago",
            text: "Great food and amazing drinks. We loved the chilled out vibe here. Highly recommend their stuffed crab and definitely the feni cocktails.",
            rating: 4
        }
    ];

    return (
        <section className="reviews-section section-padding" id="reviews">
            <div className="container">

                <div className="menu-header">
                    <span className="subtitle" style={{ textAlign: 'center' }}>Testimonials</span>
                    <h2 className="section-title">What Our Guests Say</h2>
                </div>

                <div className="reviews-grid">
                    {reviews.map(review => (
                        <div className="review-card" key={review.id}>
                            <Quote className="quote-icon" size={40} />
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < review.rating ? "#E76F51" : "none"}
                                        color={i < review.rating ? "#E76F51" : "#ccc"}
                                    />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div>
                                    <h4 className="author-name">{review.name}</h4>
                                    <span className="review-date">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Reviews;
