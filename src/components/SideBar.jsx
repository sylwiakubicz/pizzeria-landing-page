import React from 'react'
import '../styles/sideBar.css'

const SideBar = ({showSideBar}) => {
    return (
        <div className={`sideBarContainer ${showSideBar ? 'visible' : 'hidden'}`}>
            
        </div>
    )
}

export default SideBar 