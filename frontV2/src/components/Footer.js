
import React,{useState} from "react";
import Logo from "../assets_poze/ball.png";
import Cookie from './Cookie'

import "../styles/Footer.css";

function Footer() {
  const [openCookie,setOpenCookie]= useState(true)
  function abonare() {
    const email = document.getElementById("email").value;
    console.log(email);
     //PERSISTARE LOCAL STORAGE
    let emails
    if(localStorage.getItem('emails')===null)
    emails=[];
    else 
    emails=JSON.parse(localStorage.getItem('emails'))
    emails.push(email)
    localStorage.setItem('emails',JSON.stringify(emails))

    document.getElementById("email").value = "V-ati abonat cu succes!";
  }

  return (
    <>
    <div className="footer">
      <img
        src={Logo}
        alt="logo"
        className="logo"
        onClick={() => {
          window.location.href = "/";
        }}
      />

      <div className="contact">
        <h2>Contact</h2>
        <p>E: contact@letssport.com</p>
        <p>T: 0741235689</p>
        <p>A: Soseaua Pantelimon nr. 48 Bucuresti</p>
      </div>
      <div className="newsletter">
        <label htmlFor="email" className="label">
          Abonare Newsletter
        </label>
        <input type="email" id="email" placeholder="Introduceti email" />
        <button className="abonare" onClick={abonare}>
          Abonati-va
        </button>
      </div>
    </div>
     { openCookie &&  <Cookie setOpenCookie={setOpenCookie}/>}
  </>);
  
}

export default Footer;
