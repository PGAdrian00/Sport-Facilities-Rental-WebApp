import React, { useState } from "react";
import Logo from "../assets_poze/ball.png";
import User from "../assets/user.png";
import Cart from "../assets/cart.svg";

import Modal from "../components/Modal";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useSelector } from 'react-redux';

function Navbar({setShowBasket}) {
  
  const [openModal, setOpenModal] = useState(false);
  const productAdded = useSelector((state) => state.productAdded); //il aduc din redux
	let totalAdded = 0;
	productAdded.map((item) => {
		totalAdded += item.qty;
	});

  

  return (
    <div className="navbar-wrapper">
      <div className="main-nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="left-side" />
        </Link>
        <div className="center-side">
          <Link className="link" to="/">
            ACASA
          </Link>
          <Link className="link" to="/despre">
            DESPRE
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
        <div className="right-side">
          <div
            className="conectare"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={User}
              alt="user"
              className="toggle-hide"
            />
            <p style={{ cursor: "pointer" }} className="toggle-hide">
              Conectare
            </p>
          </div>
          
          <div className="cart"  onClick={() => setShowBasket(true)}>
            <img src={Cart} alt="cart" className="cart-image" />
            <p className="cart-p">Cosul tau</p>
            <p className="cart-number">{totalAdded}</p>
          </div>
        </div>
      </div>
      {openModal&&<Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Navbar;
