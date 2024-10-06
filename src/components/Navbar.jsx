import React from 'react'
import "../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav>
            <h2 className='logo'>Lorem, ipsum.</h2>
            <ul className='navList'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#menu'>Menu</a>
                </li>
                <li>
                    <a href='#special'>Special & Coupons</a>
                </li>
                <li>
                    <a href='#map'>Find us</a>
                </li>
            </ul>
            <ul className='navIcons'>
                <li>
                    <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar