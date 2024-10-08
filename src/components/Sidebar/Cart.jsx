import React from 'react'
import EmptyCart from './EmptyCart'

const Cart = () => {
    return (
    <div className='wraper'>
        <h2 className='sidebarHeader'>My order</h2>
        <EmptyCart />
        <div className='sidebarFooter'>
            <p>Order</p>
            <p>0.00 $</p>
        </div>
    </div>
    )
}

export default Cart