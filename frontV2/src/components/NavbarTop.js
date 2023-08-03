import React from "react";
import Facebook from "../assets_poze/facebook.png";
import Instagram from "../assets_poze/instagram.png";
import Events from "../assets_poze/stadium.png";
import Phone from "../assets/phone.png";
import "../styles/NavbarTop.css";

function NavbarTop() {
  return (
    <div className="top-nav">
      <div className="social-links">
        <img
          style={{ borderRadius: "25%" }}
          src={Facebook}
          alt="facebook"
          onClick={() => {
            window.open("https://www.facebook.com/terenuri.sportive.create.build.play", "_blank");
          }}
        />
        <img
          src={Instagram}
          alt="instagram"
          onClick={() => {
            window.open("https://www.instagram.com/terenurisportive/", "_blank");
          }}
        />
        <img
          src={Events}
          alt="events"
          onClick={() => {
            window.open("https://3la3.ro/ro/", "_blank");
          }}
        />
      </div>
      <div className="phone">
        <img src={Phone} alt="phone" />
        <p className="phone-number">0763254178</p>
      </div>
    </div>
  );
}

export default NavbarTop;
