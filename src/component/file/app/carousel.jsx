import React from 'react';
import img1 from '../img/portfolio1.jpg';
import img2 from '../img/portfolio2.jpg';
import img3 from '../img/portfolio3.jpg';
import img4 from '../img/portfolio4.jpg';
import img5 from '../img/portfolio5.jpg';
import img6 from '../img/half-circle.png';
import img7 from '../img/triangle.png';
import '../style/carousel.scss';
import Carousel from 'react-elastic-carousel';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 325, itemsToShow: 2 },
    { width: 550, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1440, itemsToShow: 4 }
];
function Karousel() {
    return (
        <>
            <section>
                <div className="row">
                    <p className='stu'>CASE STUDIES</p>
                    <h2>Look Our Recent <b>Solutions</b><br />Project</h2>
                    <br /><br /><br />
                    <Carousel breakPoints={breakPoints}>
                        {/* Product 1 */}

                        <div className="product">
                            <div className="product-thumb">
                                <a href=""><img src={img1} alt="" /></a>
                                <div className="text">
                                    <div className="text2">
                                        <div className="web">
                                            <p>Design Team</p>
                                            <h5>Web Design <br />Consulthing</h5>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}

                        <div className="product">
                            <div className="product-thumb">
                                <a href=""><img src={img2} alt="" /></a>
                                <div className="text">
                                    <div className="text2">
                                        <div className="web">
                                            <p>Design Team</p>
                                            <h5>Web Design <br />Consulthing</h5>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}

                        <div className="product">
                            <div className="product-thumb">
                                <a href=""><img src={img3} alt="" /></a>
                                <div className="text">
                                    <div className="text2">
                                        <div className="web">
                                            <p>Design Team</p>
                                            <h5>Web Design <br />Consulthing</h5>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}

                        <div className="product">
                            <div className="product-thumb">
                                <a href=""><img src={img4} alt="" /></a>
                                <div className="text">
                                    <div className="text2">
                                        <div className="web">
                                            <p>Design Team</p>
                                            <h5>Web Design <br />Consulthing</h5>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 5 */}

                        <div className="product">
                            <div className="product-thumb">
                                <a href=""><img src={img5} alt="" /></a>
                                <div className="text">
                                    <div className="text2">
                                        <div className="web">
                                            <p>Design Team</p>
                                            <h5>Web Design <br />Consulthing</h5>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                    <br /><br /><br /><br /><br /><br /><br />
                    {/* END */}

                    <div className="nav">
                        <div className="div">
                            <img src={img6} alt="" />
                            <center>
                                <br /><br /><br /><br />
                                <div className="textwrite">
                                    <p>OUR PRICING PLAN</p><br />
                                    <h2>We Offer The <b>Best Pricing</b> <br />Plan For You</h2>
                                </div><br /><br /><br /><br />
                                <div className="pagess">
                                    <div className="first">
                                        <div className="first1">
                                            <h4>Basic Plan</h4>
                                            <p>Extended License</p><br /><br />
                                            <div className="gradus"></div>
                                            <h1 className='h112'><i className="fa-solid  fa-dollar-sign"></i>29<b>/  Month</b></h1>
                                        </div>
                                        <div className="borderbottom"></div><br /><br />
                                        <div className="second1">
                                            <b><i className="fa-solid fa-check"></  i> 10 Pages Responsive Website</b>
                                            <b><i className="fa-solid fa-check"></  i> Custom Experience</b>
                                            <b><i className="fa-solid fa-check"></  i> Professional Staff Training</b>
                                            <button>GET LICENSE</button>
                                        </div>
                                    </div>
                                    <div className="first112">
                                        <div className="first1">
                                            <h4>Standard</h4>
                                            <p className='p1'>Extended License</p><br /><br />
                                            <h1 className='h112'><i className="fa-solid  fa-dollar-sign"></i>59<p className='p112'>/  Month</p></h1>
                                            <div className="gradus"></div>
                                        </div>
                                        <div className="borderbottom"></div><br /><br />
                                        <div className="second1">
                                            <b><i className="fa-solid fa-check"></  i> 10 Pages Responsive Website</b>
                                            <b><i className="fa-solid fa-check"></  i> Custom Experience</b>
                                            <b><i className="fa-solid fa-check"></  i> Professional Staff Training</b>
                                            <button>GET LICENSE</button>
                                        </div></div>
                                    <div className="first1122">
                                        <div className="first1">
                                            <h4>Premium</h4>
                                            <p className='p2'>Extended License</p><br /><br />
                                            <h1 className='h112'><i className="fa-solid  fa-dollar-sign"></i>99<p className='p1123'>/  Month</p></h1>
                                            <div className="gradus"></div>
                                        </div>
                                        <div className="borderbottom"></div><br /><br />
                                        <div className="second1">
                                            <b><i className="fa-solid fa-check"></  i> 10 Pages Responsive Website</b>
                                            <b><i className="fa-solid fa-check"></  i> Custom Experience</b>
                                            <b><i className="fa-solid fa-check"></  i> Professional Staff Training</b>
                                            <button>GET LICENSE</button>
                                        </div>
                                    </div>
                                </div>

                            </center>
                            <img src={img7} alt="" className='img8' />
                        </div>
                        <center>
                            <div className="box">
                                <div className="shadow2">
                                    <br /><br /><br /><br /><br /><br />
                                    <p>GROW YOUR BUSINNES</p><br /><br />
                                    <h1>Solving Varying Problems With <br /> Technological <b>Solutions.</b></h1>
                                    <div className="round3">
                                        <div className="play">
                                            <a href="https://youtu.be/9Y7ma241N8k"><i className="fa-solid fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Karousel;