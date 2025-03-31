import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>We provide quality products at the best prices. Your satisfaction is our priority!</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p>Email: support@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <p className="footer-bottom">© {new Date().getFullYear()} Products. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Footer