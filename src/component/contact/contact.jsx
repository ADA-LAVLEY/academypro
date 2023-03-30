import React from 'react';
import Navbar from '../navbar/navbar';
import './contact.scss'
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import logo2 from './img/2.png'
import logo4 from './img/4.png'
function Contact(params) {

    return (
        <>
            <div>
                <Navbar />
                <div className="contact">
                    <div className="conup">
                        <h2>Contact Us</h2>
                        <div className="only">
                            <a href="#">Home</a>
                            <i class="fa-solid fa-arrow-right"></i>
                            <p>Contact Us</p>
                        </div>
                        <img className='animet' src={logo4} alt="" />
                        <img className='animet2' src={logo2} alt="" />
                    </div>
                    <div className="condown">
                       {/* <div className="grid"> */}
                       <div className="left">
                            <div className="touch">
                                <h1>Get in Touch</h1>
                                <div className="phon1">
                                    <div className="phon">
                                        <span className='icon'><FiPhoneCall className='fi' /></span>
                                        <span className='spn2'>
                                            <h5>Phone</h5>
                                            <a className='tel' href="tel:12345678">(+998)99-12345</a> <br />
                                            <a className='tel' href="tel:12345678">(+998)99-12345</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="phon1">
                                    <div className="gmail">
                                        <span className='icon'><HiOutlineMailOpen className='fi' /></span>
                                        <span className='spn2'>
                                            <h5>Email</h5>
                                            <a className='tel' href="mailto:">sitoraweb16@gmail.com</a> <br />
                                            <a className='tel' href="mailto:">apn@email.com</a>
                                        </span>
                                    </div>
                                    
                                </div>
                                <div className="locet">
                                    <div className="loc">
                                        <span className='icon'><IoLocationOutline className='fi' /></span>
                                        <span className='spn2'>
                                            <h5>Location</h5>
                                            <a className='tel' href="tel:12345678">Andijon viloyati</a> <br />
                                            <a className='tel' href="tel:12345678">Qo'rg'ontepa tuman</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h1>Send A Message</h1>
                           <form>
                            <div className="login">
                                <div className="bir">
                                <span><input type="text" placeholder='Full Name'/></span>
                                <span><input type="text" placeholder='Email Address'/></span>
                                </div>
                                <div className="bir">
                                <span><input type="text" placeholder='Phone No :'/></span>
                                <span><input type="text" placeholder='Subject'/></span>
                                </div>
                               <div className="are">
                               <textarea name="area" id="" cols="90" rows="8" placeholder='Message'></textarea>
                                <button>SEND MESSAGE</button>
                               </div>
                            </div>
                           </form>
                        </div>
                       </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    );
}
export default Contact;