import React from "react";
// import "../styles/Pizza.css";
import Main from "../assets_poze/basketball/basketball-in-ring.jpg";
import { BaschetList } from "../helpers/BaschetList";
import BaschetItem from "../components/BaschetItem";


function Baschet() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BASCHET</h1>
      </div>

      <div className="product-list">
        {BaschetList.map((baschetItem, key) => {
          return (
            <BaschetItem
               key={key}
             

              baschetItem={baschetItem}
							
            />
          );
        })}
      </div>
       
    </div>
  );
}

export default Baschet;
