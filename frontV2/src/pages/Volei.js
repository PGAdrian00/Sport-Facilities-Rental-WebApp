import React from "react";
// import "../styles/Burgeri.css";
import Main from '../assets_poze/volleyball/volleyball-court-above-view.jpg';
import { VoleiList } from "../helpers/VoleiList";
import VoleiItem from "../components/VoleiItem";


function Burgeri() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>VOLEI</h1>
      </div>

      <div className="product-list">
        {VoleiList.map((voleiItem, key) => {
          return (
            <VoleiItem
              key={key}
              voleiItem={voleiItem}
							
            />
          );
        })}
      </div>
    </div>
  );
}

export default Burgeri;
