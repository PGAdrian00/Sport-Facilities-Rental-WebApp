import React,{useState} from "react";
import "../styles/Modal.css";
import Eye from "../assets/eye.svg";

function Modal({ setOpenModal }) {

    const [showPassword,setShowPassword]=useState(false)

    function password(){
        let pass=document.getElementById('pass')
        if(showPassword===false)
        {pass.type='text' 
        setShowPassword(!showPassword)}
        else{
            pass.type='password'
            setShowPassword(!showPassword)
        }
    }
    
  return (
    <div className="modalBackground">
     
       <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            +
          </button>
        </div>
        <div className="title">
          <h1>Conectare</h1>
        </div>
        <div className="body">
          <label htmlFor="email">Email</label>
          <input className='input' name='email' type='email'/>
          <label htmlFor="password">Parola</label>
          <input className='input' id='pass' name='password' type='password'/>
          <p>am uitat parola</p>
          <img src={Eye} alt='eye' className="eye" onClick={password}/>
        </div>
        <div className="footer-modal">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Conectare
          </button>
          <p>Inregistrare cont</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
