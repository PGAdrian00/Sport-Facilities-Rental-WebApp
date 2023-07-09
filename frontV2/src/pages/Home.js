import Reactm,{useState} from "react";
import { Link } from "react-router-dom";
import Homepage from "../assets_poze/basketball/paris-court-maybe-homepage.jpg";
import TerenuriNoi from "../components/TerenuriNoi";
import Search from '../components/Search';
import FacilitiesData from '../FacilitiesData.json';

import "../styles/Home.css";

function Home() {

  

  return (
    <div className="home">
      <Search placeholder='Cautati terenuri...' data={FacilitiesData}/>
      <div
        className="header-container"
        style={{ backgroundImage: `url(${Homepage})` }}
      >
        <div className="try">
          <h1>Vrei sa joci?</h1>
          
          <Link to="/pizza">
            <button>INCHIRIAZA TEREN</button>
          </Link>
        </div>
      </div>
      <TerenuriNoi />
    
      
    </div>
  );
}

export default Home;
