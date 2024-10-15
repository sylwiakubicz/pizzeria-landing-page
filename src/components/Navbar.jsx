import "../styles/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {toggleSidebarAction} from '../redux/toggleSidebar/toggleSidebarSlice';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useActiveSection } from '../hooks/useActiveSection';
import { faSquareFull, faBars } from "@fortawesome/free-solid-svg-icons";
import { navbarToggleAction } from "../redux/navbarToggle/navbarToggleSlice";

const Navbar = ({setShowNvabarMenu, showNvabarMenu}) => {

    const dispatch = useDispatch();
    const showNavbar = useScrollDirection();
    const activeSection = useActiveSection();  
    const { showNavbarMenu } = useSelector(state => state.navbarToggle);

    return (
        <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
            <h2 className='logo'>Lorem, ipsum.</h2>

            {/* screen width > 1024px */}
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

            {/* screen width < 1024px */}

            <div className="dropdownMenu">
            <ul className='navDropdownList' style={showNavbarMenu ? { right: '0' } : {right: '-100%'}}>
                <li>
                    <a href='#home' className={activeSection === 'home' ? 'gradientText' : ''} aria-label="Go to Home section" onClick={() => dispatch(navbarToggleAction())}>Home</a>
                </li>
                <li>
                    <a href='#pizzas' className={activeSection === 'pizzas' ? 'gradientText' : ''} aria-label="Go to pizzas section" onClick={() => dispatch(navbarToggleAction())}>Our pizzas</a>
                </li>
                <li>
                    <a href='#menu' className={activeSection === 'menu' ? 'gradientText' : ''} aria-label="Go to Menu section" onClick={() => dispatch(navbarToggleAction())}>Menu</a>
                </li>
                <li>
                    <a href='#special' className={activeSection === 'special' ? 'gradientText' : ''} aria-label="Go to Special & Coupons section" onClick={() => dispatch(navbarToggleAction())}>Special & Coupons</a>
                </li>
                <li>
                    <a href='#map' className={activeSection === 'map' ? 'gradientText' : ''} aria-label="Go to Find Us section" onClick={() => dispatch(navbarToggleAction())}>Find us</a>
                </li>
            </ul>
            </div>

            <ul className='navIcons'>
                <li className="btnToggle" onClick={() => dispatch(navbarToggleAction())}>
                    <FontAwesomeIcon icon={faBars}/>
                </li>
                <li>
                    <FontAwesomeIcon 
                        icon={faPhone}  
                        onClick={() => dispatch(toggleSidebarAction('contact'))}
                        aria-label="Contact us" 
                        role="button"
                        mask={faSquareFull} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
