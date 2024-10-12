import React from 'react'
import "./banner.css"

const Banner = () => {
    return (
        <section id="home" className='banner'>
            <img src="/images/delicious-pizza-indoors.png"/>
            <div className='bannerText'>
                <h1>Lorem ipsum <span className='color'>dolor sit, amet</span> consectetur.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse voluptatum nisi, labore ad blanditiis eveniet maiores dicta, perspiciatis a facilis exercitationem velit! Voluptatibus, exercitationem.</p>
                <button>Order now</button>
            </div>
            <img className='border' src="/images/wooden-bg.png"/> 
        </section>
    )
}

export default Banner