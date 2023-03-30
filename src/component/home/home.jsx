import React, { useState,} from 'react';
import foto from './img/hero.png'
import logo1 from './img/1.png'
import logo2 from './img/2.png'
import logo3 from './img/3.png'
import logo4 from './img/4.png'
import logo5 from './img/5.png'
// import Fade from 'react-reveal/Fade';
import './home.scss'
import Navbar from '../navbar/navbar';



function Home(params) {
    return(
        <>
        <div className='header'>
            {/* <Navbar/> */}
            <div className="asos">
                <div className="text">
        <h4>WE RE PROVIDE THE BEST SERVICES</h4>
        <h1>Design <span><img className='log' src={logo1} alt="" /> Solutions</span> For Any Media.</h1>
        <p>Pretium Convallis Lacinia. Quisque Ac Eros Urna. Mauris Eu Molestie Odio. Nullam Id Consectetur Nibh,</p>
                <a href="#"><button className='btn2'>DISCOWER MORE</button></a>
                </div>
                <img src={foto} alt="" />
            </div>
            <img className='animet' src={logo4} alt="" />
            <img className='animet1' src={logo3} alt="" />
            <img className='animet2' src={logo2} alt="" />
            <img className='animet3' src={logo5} alt="" />
        </div>
        </>
    );
}
export default Home;
