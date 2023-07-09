import React from "react";
// import "../styles/Paste.css";
import Main from "../assets_poze/football/guy-shooting-ball.jpg";
import { FotbalList } from "../helpers/FotbalList";
import FotbalItem from "../components/FotbalItem";


function Fotbal() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>FOTBAL</h1>
      </div>

      <div className="product-list">
        {FotbalList.map((fotbalItem, key) => {
          return (
            <FotbalItem
              key={key}
              fotbalItem={fotbalItem}
					
            />
          );
        })}
      </div>
    </div>
  );
}

export default Fotbal;
