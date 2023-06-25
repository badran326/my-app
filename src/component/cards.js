import '../App.css'

function Card(props) {
    return (
        <div className='photos-div'>
          <div>
            <img src={props.img1}/>
            <h4><a href='#'>{props.title1}</a></h4>
          </div>
          <div>
            <img src={props.img2}/>
            <h4><a href='#'>{props.title2}</a></h4>
          </div>
          <div>
            <img src={props.img3}/>
            <h4><a href='#'>{props.title3}</a></h4>
          </div>
          </div>
    )
}

export default Card;