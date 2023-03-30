import React from 'react';
import './project.scss';
// import logo from './img/f.png'
import logo1 from './img/rasm.png'
import logo2 from './img/1.png'
import logot from './img/3.png'
import logos from './img/4.png'
import Lottie from 'lottie-react';
import Person from './lotti/cod1.json'
// import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';
// import Navbar from '../navbar/navbar';
function Project(params) {
    return(
        <>
        <div>
            <div className="project">
                <div className="proasos">
                <div className="text">
                        <h4>Companiyamiz xaqida</h4>
                        <h1>Yaxshi dizayn yaxshi biznes.</h1>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium,</p>
                        <p>Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae Dicta Sunt Explicabo. Nemo Enim Ipsam</p>
                        <div className="up">
                        <div className="countup">
                        <span className="count">
                        <CountUp end={259} duration={4} />+
                        </span>
                        <p>Loyiha tugallandi</p>
                        </div>
                         <div className="countup1">
                        <span className="count">
                        <CountUp end={259} duration={4} />+
                        </span>
                        <p>Mijozlar mamnun</p>
                        </div>
                        </div>
                       <a href="#"><button className='btn'>DISCOWER MORE</button></a>
              </div>
                    {/* <img className='img' src={logo} alt="" /> */}
                 <Lottie animationData={Person} className="lotti"/>
                </div>
               
            </div>
            <div className="rela">
                    <img className='animet' src={logos} alt="" />
                    <img className='animet1' src={logot} alt="" />
                    </div>
            <div className="proj">
            <div className="market">
            {/* <Fade left> */}
                <img src={logo1} alt="" />
                {/* </Fade> */}
                {/* <Fade right> */}
                <div className="text">
                <h4>MARKETING YECHIMI</h4>
                        <h1>O'z biznesingizni raqamli yo'lda <span><img className='logo2' src={logo2} alt="" />rivojlantiring</span>.</h1>
                        <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium,</p>
                        <div className="skillbar">
                            <div className="bar">
                                <span className="count">
                                <h5>Product Development</h5>
                                  <span><CountUp end={85} duration={4} />%</span>
                               </span>
                              <div className="skill-wrap">
                              <span className="wrap1"></span>
                              </div>
                            </div>
                            <div className="bar">
                                <span className="count1">
                                <h5>Digital Marketing</h5>
                                  <span><CountUp end={85} duration={4} />%</span>
                               </span>
                              <div className="skill-wrap1">
                              <span className="wrap2"></span>
                              </div>
                            </div>
                            <div className="bar">
                                <span className="count2">
                                <h5>Business Consulthing</h5>
                                  <span><CountUp end={90} duration={4} />%</span>
                               </span>
                              <div className="skill-wrap2">
                              <span className="wrap3"></span>
                              </div>
                            </div>
                        </div>
                </div>
                {/* </Fade> */}
            </div>
           
            </div>
            
        </div>
        </>
    );
}
export default Project;