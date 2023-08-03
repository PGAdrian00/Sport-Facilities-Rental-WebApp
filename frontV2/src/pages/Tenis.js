import React from "react";

import Main from '../assets_poze/tennis/guy-serving.jpg';
import { TenisList } from "../helpers/TenisList";
import TenisItem from "../components/TenisItem";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/PaginiTeren.css'

function Bauturi() {
  const [tenisList, setTenisList] = useState(null);
  useEffect((
    ) => {
      axios.get("http://localhost:8080/api/sportFacilities").then((res) => {
        
        if(res.data){
          let _tenisList = res.data.filter((e) => e.sport_type == "Tenis")
          setTenisList(_tenisList)
  
        }
      }).catch((err) => {
        console.log(err)
      })
  
    },[])
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>TENIS</h1>
      </div>

      <div className="teren-list">
        {tenisList?.map((tenisItem, key) => {
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
