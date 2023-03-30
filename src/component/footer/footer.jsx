import Container from '@mui/material/Container';
import React from 'react';
import './footer.css'
import halfcircle from '../images/half-circle.png'
import circle from '../images/triangle.png'
import hand from '../images/hand.png'
import logo from '../images/logo.png'

function Footer() {
    return (
        <>
            <footer>
                <img className='triangle' src={circle} alt="" />
                <Container fixed>
                    <div className='subscribe'>
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Subscribe To Get Infromation</h2>
                            </div>
                            <div className="col-lg-6">
                                <div className="subform">
                                    <form className='subemail' action="#">
                                        <input className='email' type="text" placeholder='Email Address' />
                                        <button>SUBSCRIBE NOW</button>
                                    </form>
                                    <span>Trusted By 12.256+ Clients</span>
                                    <img className='hand' src={hand} alt="" />
                                    <img className='halfcircle' src={halfcircle} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="col-lg-6">
                            <img src={logo} alt="" />
                            <p>129 Lily Cl, London W14 9YB, United Kingdom</p>
                            <a href="/">Info@Telco.Com</a>
                        </div>
                        <div className="col-lg-6">
                            <ul className='ul-items'>
                                <h4 className='hero'>Our Pages</h4>
                                <li className='li-items'>About Us</li>
                                <li className='li-items'>Latest Post</li>
                                <li className='li-items'>Selling Tips</li>
                                <li className='li-items'>Advertising</li>
                                <li className='li-items'>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className='ul-items'>
                                <h4 className='hero'>Our Pages</h4>
                                <li className='li-items'>Web Development</li>
                                <li className='li-items'>Ui/Ux Design</li>
                                <li className='li-items'>Development</li>
                                <li className='li-items'>Development</li>
                                <li className='li-items'>Consultancy</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                        <h4 className='hero'>Get In Touch</h4>
                        <p>We Are Always Ready For Your Solution</p>
                        </div>
                    </div>
                    <div className='ft_hero'>
                    <div className="ftleft">

                    <p>© 2023. <span> APN </span> All Rights Reserved.</p>
                    </div>
                    <div className="ftright">
                        <p><a href="/">Support</a> <a href="/">Privacy</a> <a href="/">Policy</a></p>
                    </div>
                    </div>
                </Container>

            </footer>
        </>
    );
}
export default Footer;