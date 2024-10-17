import React from 'react'
import "./specialsSection.css"

const SpecialsSection = () => {
    return (
        <section className='special' id="special">
            <h2 className='gradientText'>Specials & Coupons</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum necessitatibus dolore error. Aliquam non exercitationem delectus totam, harum quisquam soluta ab aliquid officia vitae? Cumque.</p>
            <div className='ofertsWrapper'>
                <div className='ofertWraper'></div>
                <div className='ofertWraper'>
                    <h2 className='gradientText'>Pizza "Half Half"</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, fugiat.</p>
                    <div className='halfPizzaWraper'>
                        <div className='halfPizza halfPizzaLeft'></div>
                        <div className='dividePizzas'></div>
                        <div className='halfPizza halfPizzaRight'></div>
                    </div>
                </div>
                <div className='ofertWraper'></div>
            </div>        
        </section>
    )
}

export default SpecialsSection