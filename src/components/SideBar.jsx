import React from 'react'
import '../styles/sideBar.css'
import Contact from './Contact'
import Cart from './Cart'

const SideBar = ({showSideBar, typeOfSideBar}) => {
    return (
        <div className={`sideBarContainer ${showSideBar ? 'visible' : 'hidden'}`}>
            {
                typeOfSideBar === 'contact' ? <Contact /> : <Cart />
            }
        </div>
    )
}

export default SideBar 