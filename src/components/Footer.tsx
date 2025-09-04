import React from 'react';
import instagramLogo from '../assets/instagram.png'; // Correctly import the image

function Footer() {
    return (
        <footer className="footer">
            <div>
                {/* Use the imported image variable as the 'src' */}
                <a
                    href="https://www.instagram.com/axoucsb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                >
                    <img src={instagramLogo} alt="Instagram Logo" className="instagram-icon" />
                </a>
            </div>
            <p>
                © 2025 Alpha Chi Omega, Delta Psi Chapter | All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;