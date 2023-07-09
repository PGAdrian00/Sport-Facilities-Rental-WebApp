import React from 'react'
import '../styles/TerenuriNoi.css'
import Teren1 from '../assets_poze/basketball/hoop-near-beach.jpg'
import Teren2 from '../assets_poze/football/pitch-from-goal.jpg'
import Teren3 from '../assets_poze/volleyball/volleyball-ball.jpg'
import Teren4 from '../assets_poze/tennis/ball-and-racket.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
 

function TerenuriNoi() {


  return (
    <div className='produse-wrapper'>
        <h2>Cele mai noi terenuri</h2>
        <div className='produse-container'>
        
            <img src={Teren1} alt='teren1'/>
            <img src={Teren2} alt='teren2'/>
            <img src={Teren3} alt='teren3'/>
            <img src={Teren4} alt='teren4' className='hide-p'/>
            
        </div>

    </div>
  )
}

export default TerenuriNoi