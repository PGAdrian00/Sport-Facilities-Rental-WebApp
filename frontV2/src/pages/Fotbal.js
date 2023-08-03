import React from "react";
// import "../styles/Paste.css";
import Main from "../assets_poze/football/guy-shooting-ball.jpg";
import { FotbalList } from "../helpers/FotbalList";
import FotbalItem from "../components/FotbalItem";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/PaginiTeren.css'

function Fotbal() {
  const [fotbalList, setFotbalList] = useState(null);

  useEffect((
  ) => {
    axios.get("http://localhost:8080/api/sportFacilities").then((res) => {
      
      if(res.data){
        let _fotbalList = res.data.filter((e) => e.sport_type == "Fotbal")
        setFotbalList(_fotbalList)

      }
    }).catch((err) => {
      console.log(err)
    })

  },[])
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>FOTBAL</h1>
      </div>

      <div className="teren-list">
        {fotbalList?.map((fotbalItem, key) => {
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
