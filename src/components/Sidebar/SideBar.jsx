import React from 'react'
import './sideBar.css'
import Contact from './Contact'
import Cart from './Cart'
import { useSelector } from 'react-redux';

const SideBar = () => {

    const { showSidebar, sidebarType } = useSelector(state => state.toggleSidebar);

    return (
        <div 
            className={`sideBarContainer ${showSidebar ? 'visible' : 'hidden'}`} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="sidebar-title"
        >
            <h2 id="sidebar-title" className="visually-hidden">
                {sidebarType === 'contact' ? 'Contact Information' : 'Cart Details'}
            </h2>
            {
                sidebarType === 'contact' ? <Contact /> : <Cart />
            }
        </div>
    )
}

export default SideBar 