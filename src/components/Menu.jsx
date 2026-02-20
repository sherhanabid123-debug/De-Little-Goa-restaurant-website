import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Starters');

    const categories = ['Starters', 'Main Course', 'Seafood Specialties', 'Beverages', 'Desserts'];

    const menuItems = {
        'Starters': [
            { name: 'Prawns Rawa Fry', price: '₹450', desc: 'Crispy semolina coated prawns with Goan spices.', popular: true },
            { name: 'Chicken Chilly', price: '₹320', desc: 'Spicy, tangy Indo-Chinese style chicken.' },
            { name: 'Crab Xacuti Bites', price: '₹550', desc: 'Mini crab cakes infused with roasted coconut and spices.' },
            { name: 'Paneer Tikka', price: '₹280', desc: 'Cottage cheese marinated in tandoori spices, grilled to perfection.' },
            { name: 'Golden Calamari Rings', price: '₹420', desc: 'Deep-fried squid rings served with garlic mayo.' },
        ],
        'Main Course': [
            { name: 'Mutton Vindaloo', price: '₹480', desc: 'Fiery, tangy traditional Goan curry with tender mutton.' },
            { name: 'Chicken Cafreal', price: '₹420', desc: 'Chicken marinated in a fresh green spice paste, pan-fried.', popular: true },
            { name: 'Veg Xacuti', price: '₹290', desc: 'Mixed vegetables in a roasted coconut and exotic spice gravy.' },
            { name: 'Butter Chicken', price: '₹380', desc: 'Classic creamy tomato gravy with tender chicken tikkas.' },
            { name: 'Goan Red Rice', price: '₹120', desc: 'Authentic parboiled unpolished Goan rice.' },
        ],
        'Seafood Specialties': [
            { name: 'Goan Fish Thali', price: '₹550', desc: 'Complete meal: Fried Kingfish, Fish Curry, Rice, Sol Kadhi, Veggies.', popular: true },
            { name: 'Stuffed Crab', price: '₹650', desc: 'Rich, creamy and slightly sweet crab meat baked in a shell.' },
            { name: 'Kingfish Pomfret Recheado', price: '₹750', desc: 'Whole pomfret stuffed with spicy and tangy red masala, pan-fried.' },
            { name: 'Prawn Curry Rice', price: '₹480', desc: 'Fresh prawns in a coconut and raw mango curry.' },
        ],
        'Beverages': [
            { name: 'Sol Kadhi', price: '₹120', desc: 'Refreshing digestive drink made with kokum and coconut milk.', popular: true },
            { name: 'Fresh Lime Soda', price: '₹90', desc: 'Classic thirst quencher.' },
            { name: 'Goan Feni Mix', price: '₹250', desc: 'Local cashew apple spirit mixed with Limca and chili.' },
            { name: 'Virgin Pina Colada', price: '₹180', desc: 'Pineapple and coconut cream blend.' },
        ],
        'Desserts': [
            { name: 'Bebinca', price: '₹180', desc: 'Traditional Goan multi-layered pudding.', popular: true },
            { name: 'Serradura', price: '₹160', desc: 'Portuguese sawdust pudding with condensed milk and biscuit dust.' },
            { name: 'Caramel Custard', price: '₹140', desc: 'Classic creamy dessert with a caramelized sugar topping.' },
        ]
    };

    return (
        <section className="menu-section section-padding" id="menu">
            <div className="container">

                <div className="menu-header">
                    <span className="subtitle" style={{ textAlign: 'center' }}>Discover Our Flavors</span>
                    <h2 className="section-title">A Taste of Tradition</h2>
                </div>

                {/* Category Tabs */}
                <div className="menu-categories">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Items Grid */}
                <div className="menu-grid fade-in" key={activeCategory}>
                    {menuItems[activeCategory].map((item, index) => (
                        <div className="menu-item" key={index}>
                            <div className="menu-item-header">
                                <div>
                                    <h3 className="menu-item-name">{item.name}</h3>
                                    {item.popular && <span className="badge-popular">Chef's Pick</span>}
                                </div>
                                <span className="menu-item-price">{item.price}</span>
                            </div>
                            <p className="menu-item-desc">{item.desc}</p>
                            <div className="menu-item-dots"></div>
                        </div>
                    ))}
                </div>

                <div className="menu-footer">
                    <a href="#contact" className="btn btn-outline">
                        Download Full Menu
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Menu;
