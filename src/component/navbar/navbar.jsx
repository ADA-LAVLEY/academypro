import React,{useState} from 'react';
import logo from './img/logo n.png'
import { FiHome, FiPhoneCall} from "react-icons/fi";
import "./navbar.scss"
import { Link } from 'react-router-dom';


function Navbar() {
    const[ochiq,setOchiq] = useState(false)
    const [navbar,setNAvbar]=useState(false)
    const changeBg = ()=>{
     if(window.scrollY >10){
         setNAvbar(true)
     }else{  
         setNAvbar(false)
     }
    }    
    window.addEventListener('scroll', changeBg);

    function start(params) {
        setOchiq( ochiq => !ochiq)
  }
    return (  
        <>
        <div>
                    {/* <Fade top> */}
                    <nav className={navbar?'nav active':'nav'}>
                <div className="rasm">
                <Link to='/'><img src={logo} width={180} alt="" /></Link>
                <span className='spn1'>
                <span className='icon'><FiPhoneCall className='fi'/></span>
                <span className='spn2'>
                   <h4>Phone</h4>
                    <a className='tel' href="tel:12345678">(+998)95-8074567</a>
                </span>
                </span>
                </div>
                {ochiq === false ?
                <ul className="link">
                    <li className="sub">
                        <Link to='#'>HOME +</Link>
                        <ul className="sub-menu">
                            <li className='pag'><Link to='/'>home page</Link></li>
                            <li className='pag'><Link to='/'>home page</Link></li>
                        </ul>
                    </li>
                    <li className="sub"><Link to='#'>ABOUT US +</Link>
                    <ul className="sub-menu">
                            <li><Link to='/about'>home page</Link></li>
                            <li><Link to='/about'>home page</Link></li>
                            <li><Link to='/about'>home page</Link></li>
                            <li><Link to='/about'>home page</Link></li>
                        </ul>
                    </li>
                    <li className="sub"><Link to='#'>PROJECT +</Link>
                    <ul className="sub-menu">
                            <li><Link to='/project'>home page</Link></li>
                            <li><Link to='/project'>home page</Link></li>
                        </ul>
                    </li>
                    <li className="sub"><Link to='#'>TEAM +</Link>
                    <ul className="sub-menu">
                            <li><Link to='/team'>home page</Link></li>
                            <li><Link to='/team'>home page</Link></li>
                           
                        </ul>
                    </li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                :
                    <input className='inp' type="text" placeholder='Search'/>
                }
                   <div className='link'>
                 {ochiq === false?
                   <i onClick={start} className="fa-solid fa-magnifying-glass"></i>:
                   <i onClick={start} id="xmark" class="fa-solid fa-xmark"></i>
                }
                   <a href="#"><button className='btn1'>Sign up</button></a>
                   </div>
            </nav>
            {/* </Fade> */}
     
        </div>
        
        </>
    );
}

export default Navbar;