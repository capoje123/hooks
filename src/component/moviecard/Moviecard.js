import React,{useState} from 'react'
import './Style.css';
import { Rating } from 'react-simple-star-rating'
function Moviecard(props) {
  return (
  <div>
  <div className="wrapper">
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{props.el.title}</h1>
          <div className="card_cat">
            <p className="PG">PG - 13</p>
            <p className="year">2018</p>
            <p className="genre">Action | Adventure </p>
            <p className="time">2h 28m</p>
          </div>
          <p className="disc">{props.el.description}</p>
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
          <div className="social-btn">
            {/* WATCH TRAILER*/}
            <button>
              <i className="fas fa-play" /> SEE TRAILER
            </button>
            {/* GET*/}
           
            <button>
              <Rating size={20} readonly={true} initialValue={props.el.rating}/>
            </button>
            <button onClick={()=>props.deleteMoviee(props.el.id)}>Delete</button>
          </div>	
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img src={props.el.posterUrl} alt =""/>
        </div>
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i className="fas fa-play-circle" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* FOLLOW */}
  
</div>


  )
}

export default Moviecard