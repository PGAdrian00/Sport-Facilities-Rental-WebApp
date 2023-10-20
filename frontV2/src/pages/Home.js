import Reactm,{useState} from "react";
import { Link } from "react-router-dom";
import Homepage from "../assets_poze/basketball/paris-court-maybe-homepage.jpg";
import TerenuriNoi from "../components/TerenuriNoi";
import Search from '../components/Search';
import FacilitiesData from '../FacilitiesData.json';
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  
  const handleRentButtonClick = () => {
    
    navigate("/baschet");
  }

  return (
    <div className="home">
      <Search placeholder='Cautati terenuri...' data={FacilitiesData}/>
      <div
        className="header-container"
        style={{ backgroundImage: `url(${Homepage})` }}
      >
        <div className="try">
          <h1>Vrei sa joci?</h1>
          
          
            <button onClick={handleRentButtonClick}>INCHIRIAZA TEREN</button>
          
        </div>
      </div>
      <TerenuriNoi />
    
      
    </div>
  );
}

export default Home;
