import React, {useContext, useEffect, useState} from "react";
// import "../styles/Pizza.css";
import Main from "../assets_poze/basketball/basketball-in-ring.jpg";
import { BaschetList } from "../helpers/BaschetList";
import BaschetItem from "../components/BaschetItem";
import axios from "axios";
import '../styles/PaginiTeren.css'




function Baschet({props}) {

  const [baschetList, setBaschetList] = useState(null);

  useEffect((
  ) => {
    axios.get("http://localhost:8080/api/sportFacilities").then((res) => {
      
      if(res.data){
        let _baschetList = res.data.filter((e) => e.sport_type == "Baschet")
      setBaschetList(_baschetList)

      }
    }).catch((err) => {
      console.log(err)
    })

  },[])
  

  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BASCHET</h1>
      </div>

      <div className="teren-list">
        {baschetList?.map((baschetItem, key) => {
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
