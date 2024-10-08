import React from 'react'
import EmptyCart from './EmptyCart'

const Cart = () => {
    return (
    <div className='wraper' role="dialog" aria-labelledby="cart-title" aria-modal="true">
        <h2 id="cart-title" className='sidebarHeader'>My order</h2>
        <EmptyCart />
        <div className='sidebarFooter'>
            <p aria-label="Total order amount">Order</p>
            <p>0.00 $</p>
        </div>
    </div>
    )
}

export default Cart