import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import './Location.css';

const Location = () => {
    return (
        <section className="location-section section-padding" id="contact">
            <div className="container">

                <div className="menu-header" style={{ marginBottom: '3rem' }}>
                    <span className="subtitle" style={{ textAlign: 'center' }}>Plan Your Visit</span>
                    <h2 className="section-title">Find Us Here</h2>
                </div>

                <div className="location-container">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3 className="info-title">Drop by for a Bite</h3>

                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h4>Location</h4>
                                    <p>Near St. Alex Church, Naikka Waddo,<br />Calangute, Goa 403516</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock className="info-icon" />
                                <div>
                                    <h4>Opening Hours</h4>
                                    <p>Mon - Thu: 12:00 PM – 12:30 AM<br />Fri - Sun: 12:00 PM – 1:00 AM</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h4>Contact</h4>
                                    <p>074474 57704<br />Reservations & Takeaway</p>
                                </div>
                            </div>



                            <div style={{ marginTop: '2rem' }}>
                                <a href="tel:07447457704" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
                                    Call to Book
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Embedded Map */}
                    <a
                        href="https://www.google.com/maps/place/De+Little+Goa/@15.5438702,73.7666091,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc15d0840a7cd:0xf53d16ccc8b39456!8m2!3d15.543865!4d73.769184!16s%2Fg%2F11f2wpzyv1?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-container"
                        style={{ display: 'block', position: 'relative', cursor: 'pointer' }}
                    >
                        <iframe
                            title="De Little Goa Google Map"
                            src="https://maps.google.com/maps?q=De%20Little%20Goa,%20Calangute,%20Goa&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, pointerEvents: 'none' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="map-overlay-hover">
                            <span>Open in Google Maps</span>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Location;
