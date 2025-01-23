import React from "react";
import littlelemon_logo from "../images/header.logo.jpg"

const Nav = () => {
    return(
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/booking">Booking</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default Nav;