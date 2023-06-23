import './App.css';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
          <ol>
            <li><a href='./App.js'>Home</a></li>
            <li><a href='../public/index.html'>Gallery</a></li>
            <li><a href='#'>About me</a></li>
            <li className='badran'>Developer Badran</li>
            <li className='li-contact'><a href='#'>Contact me</a></li>
            <img src='Badr.jpg'></img>
          </ol>
        </nav>
      </header>
      <body className="App-body">
      </body>
    </div>
  );
}

export default App;
