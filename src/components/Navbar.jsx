import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                    <a href='#home' className={activeSection === 'home' ? 'active' : ''}>Home</a>
                </li>
                <li>
                    <a href='#menu' className={activeSection === 'menu' ? 'active' : ''}>Menu</a>
                </li>
                <li>
                    <a href='#special' className={activeSection === 'special' ? 'active' : ''}>Special & Coupons</a>
                </li>
                <li>
                    <a href='#map' className={activeSection === 'map' ? 'active' : ''}>Find us</a>
                </li>
            </ul>
            <ul className='navIcons'>
                <li>
                    <FontAwesomeIcon 
                        icon={faCartShopping} 
                        onClick={() => dispatch(toggleSidebarAction('cart'))}/>
                </li>
                <li>
                    <FontAwesomeIcon 
                        icon={faPhone}  
                        onClick={() => dispatch(toggleSidebarAction('contact'))}/>

                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
