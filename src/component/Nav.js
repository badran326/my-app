import '../App.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Nav() {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        let prevScrollPos = window.pageYOffset;
    
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsVisible(prevScrollPos > currentScrollPos);
          prevScrollPos = currentScrollPos;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the scroll event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
            <nav className={isVisible ? 'visible' : 'hidden'}>
                <ol>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/gallery'}>Gallery</Link></li>
                    <li><Link to={'/about-me'}>About me</Link></li>
                    <li className='badran'>Developer Badran</li>
                    <li className='li-contact'><Link to={'/Contact-me'}>Contact me</Link></li>
                    <img className='nav-img' src='Badr.jpg' alt='Badr'></img>
                </ol>
            </nav>
    )
}

export default Nav;