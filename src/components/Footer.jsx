import React from 'react'
import "../styles/footer.css"

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
            <div></div>
            <p>© {today.getFullYear()} Lorem, ipsum.</p>
        </div>
    )
}

export default Footer