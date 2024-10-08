import React from 'react'
import './sideBar.css'
import Contact from './Contact'
import Cart from './Cart'
import { useSelector } from 'react-redux';

const SideBar = () => {

    const { showSidebar, sidebarType } = useSelector(state => state.toggleSidebar);

    return (
        <div className={`sideBarContainer ${showSidebar ? 'visible' : 'hidden'}`}>
            {
                sidebarType === 'contact' ? <Contact /> : <Cart />
            }
        </div>
    )
}

export default SideBar 