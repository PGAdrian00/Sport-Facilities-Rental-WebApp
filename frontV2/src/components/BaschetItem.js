import React from 'react'
import TerenItem from './TerenItem'

function BaschetItem({baschetItem}) {
  
  return (
    <TerenItem item={baschetItem} />
    // <div className='pizza-item'>
    //         <div style={{backgroundImage:`url(${image})`}}></div>
    //         <h1>{name}</h1>
    //         <p>{description}</p>
    //         <button onClick={pop}>{price} lei</button>

    // </div>
  )
}

export default BaschetItem