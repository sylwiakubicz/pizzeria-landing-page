import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EmptyCart() {
    return (
        <div className='emptyCart'>
            <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
            <h3>Cart is empty</h3>
            <p>Add a dish to continue</p>
        </div>
    )
}

export default EmptyCart