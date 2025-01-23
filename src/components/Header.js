import React from "react";
import food1 from "../images/pexels-photo-1640777.jpeg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
                <div className="header-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago's Finest Mediterranean Cuisine</h2>
                    <p>Experience authentic Mediterranean flavors in a modern setting. Our family recipes have been perfected through generations, bringing you the perfect blend of tradition and innovation.</p>
                    <Link to="/Booking">
                        <button className="cta-button" aria-label="Reserve a Table">
                            Book Your Table Now
                        </button>
                    </Link>
                </div>
                <div className="header-image">
                    <img 
                        src={food1} 
                        alt="Delicious Mediterranean dish"
                        className="hero-image"
                    />
                </div>
            </section>
        </header>
    )
}

export default Header;