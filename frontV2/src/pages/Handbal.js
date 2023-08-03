import React from "react";
// import "../styles/Desert.css";
import Main from '../assets_poze/handball/ball-post.jpg';
import { HandbalList } from "../helpers/HandbalList";
import HandbalItem from "../components/HandbalItem";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/PaginiTeren.css'


function Handbal() {
  const [handbalList, setHandbalList] = useState(null);
  useEffect((
    ) => {
      axios.get("http://localhost:8080/api/sportFacilities").then((res) => {
        
        if(res.data){
          let _handbalList = res.data.filter((e) => e.sport_type == "Handbal")
          setHandbalList(_handbalList)
  
        }
      }).catch((err) => {
        console.log(err)
      })
  
    },[])
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>HANDBAL</h1>
      </div>

      <div className="teren-list">
        {handbalList?.map((handbalItem, key) => {
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
