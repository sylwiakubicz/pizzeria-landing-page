import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const today = new Date();

    return (
        <div className='footer'>
            <div className='listContainer'>
                <a>About us</a>
                <a>Special offerts</a>
                <a>Find us in your region</a>
                <a>Ingredient list</a>
                <a>Allergens and energy</a>
                <a>Privacy policy</a>
                <a>Terms and conditions</a>
            </div>
            <p>Follow us on:</p>
            <div className='iconsContainer'>
                <a>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a>
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a>
                    <FontAwesomeIcon icon={faTiktok}/>
                </a>
            </div>
            <p>© {today.getFullYear()} Lorem, ipsum.</p>
        </div>
    )
}

export default Footer