import React from 'react'
import './sideBar.css'
import Contact from './Contact'
import { useSelector } from 'react-redux';

const SideBar = () => {

    const { showSidebar } = useSelector(state => state.toggleSidebar);

    return (
        <div 
            className={`sideBarContainer ${showSidebar ? 'visible' : 'hidden'}`} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="sidebar-title"
        >
            <h2 id="sidebar-title" className="visually-hidden">Contact Information</h2>
            <Contact /> 
        </div>
    )
}

export default SideBar 