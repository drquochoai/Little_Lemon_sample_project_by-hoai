import React from "react"
import small_logo from "../images/lemon-logo_9850-335.jpg"

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#000',
        color: 'white',
        padding: '2rem 0',
    }

    const sectionStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '0 2rem',
    }

    const logoStyle = {
        flex: '1',
        minWidth: '150px',
        marginBottom: '1rem',
    }

    const columnStyle = {
        flex: '1',
        minWidth: '200px',
        marginBottom: '1rem',
    }

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        lineHeight: '1.8',
    }

    const copyrightStyle = {
        textAlign: 'center',
        marginTop: '2rem',
        borderTop: '1px solid #6B7F77',
        padding: '1rem 0',
    }
    return (
        <footer style={footerStyle}>
            <section style={sectionStyle}>
                <div style={logoStyle}>
                    <img src={small_logo} alt="Little Lemon Logo" style={{width: '100px'}} />
                </div>
                <div style={columnStyle}>
                    <h3>Navigation</h3>
                    <ul style={listStyle}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h3>Contact</h3>
                    <ul style={listStyle}>
                        <li>123 Restaurant St.</li>
                        <li>(555) 123-4567</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div style={columnStyle}>
                    <h3>Social Media</h3>
                    <ul style={listStyle}>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </section>
            <div style={copyrightStyle}>
                © 2025 Little Lemon. All rights reserved.
            </div>
        </footer>
    )


}

export default Footer;