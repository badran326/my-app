import '../App.css';
import Nav from '../component/Nav';
import Card from '../component/cards';
import img1 from '../imgs/facebook.png';
import img2 from '../imgs/instagram.png';
import img3 from '../imgs/whatsapp.png';

function ContactMe() {
  return (
    <div>
      <header>
        <Nav/>
      </header>
      <body>
        <div className='container'>
          <Card img1={img1} img2={img2} img3={img3} title1='Face Book' title2='Instagam' title3='Whatsapp'/>
        </div>
      </body>
    </div>
  );
}

export default ContactMe;