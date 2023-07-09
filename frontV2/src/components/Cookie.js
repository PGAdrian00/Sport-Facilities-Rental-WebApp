import React, { useState } from "react";
import "../styles/Cookie.css";

function Cookie({setOpenCookie}) {


  
  let cookieAccept = () => {
    localStorage.setItem("cookieOn", "true");
    document.querySelector(".cookie-background").style.display = "none";
    setOpenCookie(false)
  };

  let cookieX = () => {
    document.querySelector(".cookie-background").style.display = "none";
  };

  return (
    <div>
      <div className="cookie-background">
        <div className="cookie">
          <h4>Acest website foloseste cookie-uri</h4>
          <p>
            Let`s Sport foloseste propriile cookies in scopuri statisitice,
            pentru a va cunoaste preferintele, pentru performanta website-ului
            si pentru interactiunea cu social media, oferindu-va publicitate
            bazata pe nevoile dumneavoastra. Daca continuati, consideram ca
            acceptati sa utilizati aceasta metoda. 
            <br />
            <a href="./gdpr">Vezi politica de confidentialitate</a>
          </p>
          <button type="button" id="cookie-button" onClick={cookieAccept}>
            ACCEPT
          </button>
          <h5 id="x-cookie" onClick={cookieX}>
            +
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
