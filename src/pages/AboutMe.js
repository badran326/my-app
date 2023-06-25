import '../App.css';
import Nav from '../component/Nav';
import Card from '../component/cards';
import img1 from '../imgs/programming-skills.png';
import img2 from '../imgs/Badran.jpeg';
import img3 from '../imgs/IMG-20230521-WA0074.png';

function AboutMe() {
  return (
    <div>
      <header className='Aboutt-Me_Header'>
        <Nav/>
      </header>
      <body>
        <div className='container'>
          <Card img1={img1} img2={img3} img3={img2} title1='How I start programming' title2='About my team' title3='How I start running'/>
        </div>
      </body>
    </div>
  );
}

export default AboutMe;