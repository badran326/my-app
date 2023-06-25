import '../App.css';
import Nav from '../component/Nav';
import Card from '../component/cards';
import img1 from '../imgs/programming-skills.png';
import img2 from '../imgs/Badran.jpeg';
import img3 from '../imgs/IMG-20230521-WA0074.png';

function Gallery() {
  return (
    <div>
      <header className="Gallery-header">
        <Nav/>
      </header>
      <body>
        <div className='container'>
          <Card img1={img1} img2={img3} img3={img2} title1='My programming Photos' title2='My Team Photos' title3='My Race Photos'/>
        </div>
      </body>
    </div>
  );
}

export default Gallery;