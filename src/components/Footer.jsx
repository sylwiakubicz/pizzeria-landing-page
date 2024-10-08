import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const today = new Date();

    return (
        <div className='footer'>
            <div className='listContainer'>
                <a href="#home" aria-label="About us">About us</a>
                <a href="#special" aria-label="Special offers">Special offers</a>
                <a href="#map" aria-label="Find us in your region">Find us in your region</a>
                <a href="#" aria-label="Ingredient list">Ingredient list</a>
                <a href="#" aria-label="Allergens and energy">Allergens and energy</a>
                <a href="#" aria-label="Privacy policy">Privacy policy</a>
                <a href="#" aria-label="Terms and conditions">Terms and conditions</a>
            </div>
            <p>Follow us on:</p>
            <div className='iconsContainer'>
                <a href="https://www.instagram.com" aria-label="Follow us on Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com" aria-label="Follow us on Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.tiktok.com" aria-label="Follow us on TikTok">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
            </div>
            <p>© {today.getFullYear()} Lorem, ipsum.</p>
        </div>
    )
}

export default Footer