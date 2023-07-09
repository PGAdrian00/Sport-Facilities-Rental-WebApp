import React from "react";

import Main from '../assets_poze/tennis/guy-serving.jpg';
import { TenisList } from "../helpers/TenisList";
import TenisItem from "../components/TenisItem";


function Bauturi() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>TENIS ADMINISTRATOR</h1>
      </div>

      <div className="product-list">
        {TenisList.map((tenisItem, key) => {
          return (
            <TenisItem
              key={key}
              tenisItem={tenisItem}
						
            />
          );
        })}
      </div>
    </div>
  );
}

export default Bauturi;
