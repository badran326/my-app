import '../App.css';

function Nav() {
    return (
        <header className="App-header">
            <nav className='App-nav'>
                <ol>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/gallery'>Gallery</a></li>
                    <li><a href='/about-me'>About me</a></li>
                    <li className='badran'>Developer Badran</li>
                    <li className='li-contact'><a href='contact-me'>Contact me</a></li>
                    <img src='Badr.jpg' alt='Badr'></img>
                </ol>
            </nav>
        </header>
    )
}

export default Nav;