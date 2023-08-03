import React, { useContext, useEffect, useState } from 'react';
import Logo from '../assets_poze/ball.png';
import User from '../assets/user.png';
import Cart from '../assets/cart.svg';

import Modal from '../components/Modal';
import UserMenu from './UserMenu';


import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Login.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { UserContext } from '../UserContext';

import { toast } from 'react-toastify';


function Navbar({ setShowBasket }) {
  
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const productAdded = useSelector((state) => state.productAdded); //il aduc din redux
  let totalAdded = 0;
  productAdded.map((item) => {
    totalAdded += item.qty;
  });


  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  }

  const loginHandler = function (userData) {
    axios
      .get(
        `http://localhost:8080/api/users/verificareLogareUtilizator/${userData.userEmail}/${userData.userPassword}`
      )
      .then((response) => {
        // console.log('DATELE DIN LOGIN!!');
        // console.log(response.data);

        if (response.data === 'UserInexistent') {
          toast.error('Username or password do not exist!');
        } else {
          setUser(response.data);
          // console.log(response.data);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            className="conectare">
            {
              user ? (
                <div className='user'>
                <Link to="/userPage">
                  <img src={User} alt="user" className="toggle-hide" />
                </Link>
                <UserMenu onLogout={handleLogout} />
                </div>
              ) : (
                <>
                  <img
                    style={{ cursor: "pointer" }}
                    src={User}
                    alt="user"
                    className="toggle-hide"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  />
                  <p style={{ cursor: "pointer" }} className="toggle-hide">
                    Conectare
                  </p>
                </>
              )}

          </div>

          <div className="cart" onClick={() => setShowBasket(true)}>
            <img src={Cart} alt="cart" className="cart-image" />
            <p className="cart-p">Cosul tau</p>
            <p className="cart-number">{totalAdded}</p>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal} doLogin={loginHandler} />
      )}
    </div>
  );
}

export default Navbar;
