import React from "react";
// import "../styles/Desert.css";
import Main from '../assets_poze/handball/ball-post.jpg';
import { HandbalList } from "../helpers/HandbalList";
import HandbalItem from "../components/HandbalItem";


function Handbal() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>HANDBAL</h1>
      </div>

      <div className="product-list">
        {HandbalList.map((handbalItem, key) => {
          return (
            <HandbalItem
              key={key}
              handbalItem={handbalItem}
						
            />
          );
        })}
      </div>
    </div>
  );
}

export default Handbal;
