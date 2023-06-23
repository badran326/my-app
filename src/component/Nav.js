import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header className="App-header">
            <nav className='App-nav'>
                <ol>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/gallery'}>Gallery</Link></li>
                    <li><Link to={'/about-me'}>About me</Link></li>
                    <li className='badran'>Developer Badran</li>
                    
                    <li className='li-contact'><Link to={'/Contact-me'}>Contact me</Link></li>
                    <img src='Badr.jpg' alt='Badr'></img>
                </ol>
            </nav>
        </header>
    )
}

export default Nav;