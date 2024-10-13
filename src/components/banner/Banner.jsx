import React from 'react'
import "./banner.css"
import { useDispatch } from 'react-redux';
import {toggleSidebarAction} from '../../redux/toggleSidebar/toggleSidebarSlice';

const Banner = () => {

    const dispatch = useDispatch();

    return (
        <section id="home" className='banner' role="banner" aria-labelledby="banner-title" aria-describedby="banner-description">
            <img src="/images/delicious-pizza-indoors.png" alt="Delicious pizza indoors" role="img"/>
            <div className='bannerText'>
                <h1 id="banner-title">Lorem ipsum <span className='gradientText'>dolor sit, amet</span> consectetur.</h1>
                <p id="banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse voluptatum nisi, labore ad blanditiis eveniet maiores dicta, perspiciatis a facilis exercitationem velit! Voluptatibus, exercitationem.</p>
                <button aria-label="Order now" onClick={() => dispatch(toggleSidebarAction('contact'))}>Order now</button>
            </div>
        </section>
    )
}

export default Banner