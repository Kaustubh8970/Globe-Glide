// import React from 'react'
// import './footer.css'

// export default function Footer() {
//   return (
//     <div>
//       Footer
//     </div>
//   )
// }



// Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <h3>MOU-TRIPS</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="/aboutus">About</a></li>
                        <li><a href="/famous">Destinations</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-info">
                    <h3>Contact Us</h3>
                    <p className='footerp'>Email: info@example.com</p>
                    <p className='footerp'>Phone: +123-456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='footerp'>&copy; 2024 Kaustubh Raut All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
