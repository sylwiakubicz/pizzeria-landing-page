import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    const today = new Date();

    return (
        <div className='footer'>
            <div>
                <a>About us</a>
                <a>About us</a>
                <a>About us</a>
                <a>About us</a>
                <a>About us</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTiktok} />

            </div>
            <p>© {today.getFullYear()} Lorem, ipsum.</p>
        </div>
    )
}

export default Footer