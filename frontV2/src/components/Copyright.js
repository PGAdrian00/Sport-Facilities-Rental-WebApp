import React from "react";
import "../styles/Copyright.css";
import { Link } from "react-router-dom";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright-wrapper">
      <div id="copyright">
        &copy;{currentYear} Powerd By Pascale George-Adrian
        </div>
         &nbsp; / &nbsp;
      <div className="privacy">
        <Link to="./gdpr" className="link-c">
          <p className="termeni">Politica de confidentialitate (GDPR)</p> 
         </Link>
      </div>
      {/* ADAUGA TERMENI SI CONDITII / GDPR */}
    </div>
  );
}

export default Copyright;
