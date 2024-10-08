import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmptyCart = () => {
    return (
        <div className='emptyCart' role="alert" aria-live="assertive">
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon' aria-hidden="true"/>
            <h3>Cart is empty</h3>
            <p>Add a dish to continue</p>
        </div>
    )
}

export default EmptyCart