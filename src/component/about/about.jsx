import React from 'react';
import './about.scss'
import logo1 from './img/1.png'
import logo2 from './img/3.png'
import logo3 from './img/4.png'
import logo4 from './img/5.png'
import logo5 from './img/6.png'
import logo6 from './img/7.png'
import Lottie from 'lottie-react';
import Comp from './json/comp1.json'
import logo7 from './img/2.png'
function About(params) {
    return(
        <>
        <div>
            <div className="about">
                <div className="top">
                    <div className="text">
                        <h4>Mashhur xizmatlar</h4>
                        <h1> <img className='log' src={logo1} alt="" /> Mijozlarimizga xizmat ko'rsatishga bag'ishlangan</h1>
                    </div>
                    <div className="text1">
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto</p>
                        <a href="#">Barcha xizmatlarni ko'rish </a><i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
                <div className="midle">
                    <div className="one">
                    <div className="cap">
                    <div className='icon'><img src={logo2} alt="" /></div>
                    <h4>Brend identify desine</h4>
                    <a href="#">EXPLORE <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    </div>
                    <div className="two">
                    <div className="cap">
                    <div className="icon"><img src={logo3} alt="" /></div>
                    <h4>Brend identify desine</h4>
                    <a href="#">EXPLORE <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    </div>
                    <div className="three">
                        <div className="cap">
                        <div className='icon'><img src={logo4} alt="" /></div>
                    <h4>Brend identify desine</h4>
                    <a href="#">EXPLORE <i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className="for">
                    <div className="cap">
                    <div className='icon'><img src={logo5} alt="" /></div>
                    <h4>Brend identify desine</h4>
                    <a href="#">EXPLORE <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    </div>
                </div>
                <div className="one-page">
                <div className="page">
                <Lottie animationData={Comp} className="lotti"/>
                    {/* <img src={logo6} alt="" /> */}
                    <div className="text">
                        <h4>Companiyamiz xaqida</h4>
                        <h1>Murakkab dasturiy ta'minot soddalashtirilgan.</h1>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium,</p>
                        <p>Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt Explicabo. Nemo Enim Ipsam</p>
                        <ul className='list'>
                            <li><i className="fa-solid fa-check"></i>Kontent yaratish va optimallashtirish</li>
                            <li><i className="fa-solid fa-check"></i>Integrated Online Marketing Strategies</li>
                        </ul>
                       <a href="#"><button className='btn'>DISCOWER MORE</button></a>
                    </div>
                    <img className='animet' src={logo7} alt="" />
                   
                </div>
                </div>
               
            </div>
        </div>
        </>
    );
}
export default About;