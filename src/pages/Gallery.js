import '../App.css';
import Nav from '../component/Nav';
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
          <div className='photos-div'>
          <div>
            <img src={img1}/>
            <h4>My programming Photos</h4>
          </div>
          <div>
            <img src={img2}/>
            <h4>My Race Photos</h4>
          </div>
          <div>
            <img src={img3}/>
            <h4>My Team Photos</h4>
          </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Gallery;