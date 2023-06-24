import '../App.css';

function Nav() {
    return (
        <header className="App-header">
            <nav className='App-nav'>
                <ol>
                    <li><a>Home</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>About me</a></li>
                    <li className='badran'>Developer Badran</li>
                    <li className='li-contact'><a>Contact me</a></li>
                    <img src='Badr.jpg' alt='Badr'></img>
                </ol>
            </nav>
        </header>
    )
}

export default Nav;