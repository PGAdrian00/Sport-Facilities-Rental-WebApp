import React from "react";
// import "../styles/Burgeri.css";
import Main from '../assets_poze/volleyball/volleyball-court-above-view.jpg';
import { VoleiList } from "../helpers/VoleiList";
import VoleiItem from "../components/VoleiItem";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/PaginiTeren.css'


function Volei() {
  const [voleiList, setVoleiList] = useState(null);
  useEffect((
    ) => {
      axios.get("http://localhost:8080/api/sportFacilities").then((res) => {
        
        if(res.data){
          let _voleiList = res.data.filter((e) => e.sport_type === "Volei")
          setVoleiList(_voleiList)
  
        }
      }).catch((err) => {
        console.log(err)
      })
  
    },[])
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>VOLEI</h1>
      </div>

      <div className="teren-list">
        {voleiList?.map((voleiItem, key) => {
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

export default Volei;
