import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarTop from './components/NavbarTop';
import Categories from './components/Categories';
import Home from './pages/Home';
import Baschet from './pages/Baschet';
import Fotbal from './pages/Fotbal';
import Volei from './pages/Volei';
import Handbal from './pages/Handbal';
import Tenis from './pages/Tenis';
import Despre from './pages/Despre';
import Contact from './pages/Contact';
import Copyright from './components/Copyright';
import Gdpr from './pages/Gdpr';
import Basket from './components/Basket';
import UserPage from './pages/UserPage';
import TerenPage from './pages/TerenPage';
import AdaugaTeren from './components/AddFacilityForm';

import { UserContext } from './UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  const [userRole, setUserRole] = useState('user');

  const [showBasket, setShowBasket] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <NavbarTop />
          <Navbar setShowBasket={setShowBasket} />
          <Categories />

          <Routes>
            <Route path="/licenta" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/baschet" element={<Baschet />} />
            <Route path="/fotbal" element={<Fotbal />} />
            <Route path="/volei" element={<Volei />} />
            <Route path="/handbal" element={<Handbal />} />
            <Route path="/tenis" element={<Tenis />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gdpr" element={<Gdpr />} />
            <Route path="/teren/:terenId" element={<TerenPage />} />
            <Route path="/addFacility" element={<AdaugaTeren />} />
          </Routes>
          {showBasket && <Basket setShowBasket={setShowBasket} />}
          <Footer />
          <Copyright />
          <ToastContainer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
