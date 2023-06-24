import './App.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Nav from './component/Nav';
import img1 from './imgs/programming-skills.png';
import img2 from './imgs/Badran.jpeg';
import img3 from './imgs/IMG-20230521-WA0074.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <body className="App-body">
        <div className='container'>
          <AliceCarousel autoPlay autoPlayInterval="3000">
          <div className='slider-img-div'>
            <img src={img1} className='slider-img' alt=''/>
            <h3>I'm not jus a programmer</h3>
          </div>
          <div className='slider-img-div'>
            <img src={img2} className='slider-img' alt=''/>
            <h3>I'm also a marathoner</h3>
          </div>
          <div className='slider-img-div'>
            <img src={img3} className='slider-img' alt=''/>
            <h3>The Crew is my team</h3>
          </div>
          </AliceCarousel>
        </div>
      </body>
    </div>
  );
}

export default App;
