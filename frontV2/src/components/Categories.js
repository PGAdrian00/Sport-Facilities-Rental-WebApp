import React, { useState } from 'react'
import '../styles/Categories.css'
import {Link} from 'react-router-dom'
import Hamburger from '../assets_poze/hamburger.png'

function Categories() {
  
  const [showLinks,setShowLinks] = useState(false)
  function showMenu(){
 
  }

  return (
    <div className='categories-wrapper'>
    <div className='categories' >
         <div className='links' id={showLinks?"hidden":""}>
              <Link to='/baschet' >BASCHET</Link>
              <Link to='/fotbal' >FOTBAL</Link>
              <Link to='/volei' >VOLEI</Link>
              <Link to='/handbal' >HANDBAL</Link>
              <Link to='/tenis' >TENIS</Link>
          </div>
        <div className='short-nav' onClick={()=>{setShowLinks(!showLinks)}}>
          <h1>Vezi sporturi</h1>
          <img src={Hamburger} alt='hamburger' className='hamburger' onClick={showMenu}/>
        </div>

    </div>
    </div>
  )
}

export default Categories