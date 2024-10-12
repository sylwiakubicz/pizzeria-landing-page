import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {toggleSidebarAction} from '../redux/toggleSidebar/toggleSidebarSlice';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {

    const dispatch = useDispatch();
    const showNavbar = useScrollDirection();
    const activeSection = useActiveSection();  

    return (
<nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
            <h2 className='logo'>Lorem, ipsum.</h2>
            <ul className='navList'>
                <li>
                    <a href='#home' className={activeSection === 'home' ? 'gradientText' : ''} aria-label="Go to Home section">Home</a>
                </li>
                <li>
                    <a href='#pizzas' className={activeSection === 'pizzas' ? 'gradientText' : ''} aria-label="Go to pizzas section">Our pizzas</a>
                </li>
                <li>
                    <a href='#menu' className={activeSection === 'menu' ? 'gradientText' : ''} aria-label="Go to Menu section">Menu</a>
                </li>
                <li>
                    <a href='#special' className={activeSection === 'special' ? 'gradientText' : ''} aria-label="Go to Special & Coupons section">Special & Coupons</a>
                </li>
                <li>
                    <a href='#map' className={activeSection === 'map' ? 'gradientText' : ''} aria-label="Go to Find Us section">Find us</a>
                </li>
            </ul>
            <ul className='navIcons'>
                <li >
                    <FontAwesomeIcon 
                        icon={faPhone}  
                        onClick={() => dispatch(toggleSidebarAction('contact'))}
                        aria-label="Contact us" 
                        role="button" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
