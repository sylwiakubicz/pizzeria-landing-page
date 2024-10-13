import React from 'react'
import {useCheckOrderAvailability} from "../../hooks/useCheckOrderAvability"

const Contact = () => {

    const message = useCheckOrderAvailability()
    return (
        <div className='contact' role="contentinfo">
            <h1 className='gradientText' id="contact-message">{message}</h1>
            <div>
                <h2 id="opening-hours-title">Opening hours</h2>
                <ul className='openInfo' aria-labelledby="opening-hours-title">
                    <li>
                        Monday to Thursday:
                        <span>11:00 AM - 10:00 PM</span>
                    </li>
                    <li>
                        Friday and Saturday: 
                        <span>11:00 AM - 11:00 PM</span>    
                    </li>
                    <li>
                        Sunday:
                        <span>12:00 PM - 9:00 PM</span>
                    </li>
                </ul>
                <h3 id="order-info-title">Call us to <span className='gradientText'>Order</span> or to <span className='gradientText'>Book a table</span></h3>
                <ul className='phoneInfo' aria-labelledby="order-info-title">
                    <li>Phone: 
                        <span>+48 123 456 789</span></li>
                    <li>Mobile: 
                        <span>+48 987 654 321 </span></li>
                </ul>
            </div>
            <p aria-live="polite">Free delivery for orders over $50.00!</p>
        </div>
    )
}

export default Contact