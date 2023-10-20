import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TerenPeHarta from '../components/TerenPeHarta';
import '../styles/AddFacilityForm.css';

const AddFacilityForm = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [newFacility, setNewFacility] = useState({
    name: '',
    description: '',
    sport_type: '',
    location: {
      type: 'Point',
      coordinates: ['', ''],
    },
    address: '',
    is_indoor: false,
    has_night_lights: false,
    price_per_hour: '',
    image_source: '',
  });

  const handleInputChange = (event) => {
    setNewFacility({ ...newFacility, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setNewFacility({
      ...newFacility,
      [event.target.name]: event.target.checked,
    });
  };
  const handleCoordinateChange = (event) => {
    setNewFacility((prevState) => ({
      ...prevState,
      location: {
        ...prevState.location,
        coordinates:
          event.target.name === 'latitude'
            ? [event.target.value, prevState.location.coordinates[1]]
            : [prevState.location.coordinates[0], event.target.value],
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an API request to create the new facility
    axios
      .post(`http://localhost:8080/api/sportFacilities/${user.id}`, newFacility)
      .then(() => {
        navigate('/'); // Redirect to home page after facility is created
      });
  };

  return (
    <div className="teren-container">
      <h1 className="teren-name">Adauga un teren nou</h1>
      <div className="teren-info">
        <div className="teren-details">
          <form onSubmit={handleSubmit} className="add-facility-form">
            <label>
              Nume:
              <input type="text" name="name" onChange={handleInputChange} />
            </label>
            <label>
              Descriere:
              <textarea name="description" onChange={handleInputChange} />
            </label>
            <label>
              Sport:
              <input
                type="text"
                name="sport_type"
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input type="text" name="address" onChange={handleInputChange} />
            </label>
            <label>
              Latitudine:
              <input
                type="number"
                step="0.0001"
                name="latitude"
                onChange={handleCoordinateChange}
              />
            </label>
            <label>
              Longitudine:
              <input
                type="number"
                step="0.0001"
                name="longitude"
                onChange={handleCoordinateChange}
              />
            </label>

            <label>
              Inauntru:
              <input
                type="checkbox"
                name="is_indoor"
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Nocturna:
              <input
                type="checkbox"
                name="has_night_lights"
                onChange={handleCheckboxChange}
              />
            </label>
            <label>
              Pret pe ora:
              <input
                type="number"
                name="price_per_hour"
                step="0.01"
                onChange={handleInputChange}
              />
            </label>
            <label>
              Imagine:
              <input
                type="text"
                name="image_source"
                onChange={handleInputChange}
              />
            </label>
            <button type="submit" className="rent-button">
              Adauga teren
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFacilityForm;
