import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import Menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  
  const[sticky, setSticky] = useState (false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 510 ? setSticky (true) : setSticky(false);
    })
  }, []);

  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  
  
  return (
    <React.Fragment>
    
      <nav className= {`container ${sticky ? 'dark-nav' : '' }`}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth= {true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='bests' smooth= {true} offset={-260} duration={500}>Products</Link></li>
        <li><Link to='about' smooth= {true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='card' smooth= {true} offset={-260} duration={500}>Team</Link></li>
        <li><Link to='testimonials' smooth= {true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth= {true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={Menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
      
    </React.Fragment>
  )
}
      
   
  


export default Navbar
