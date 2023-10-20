import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import '../styles/UserPage.css';
import defaultProfileImage from '../assets_poze/user.png';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/UserPageModal.css';

function UserPage() {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [rentals, setRentals] = useState(null);
  const [facilities, setFacilities] = useState(null);
  const [facId, setFacId] = useState(null);
  const [facilityStatus, setFacilityStatus] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);
  const [numberOfBalls, setNumberOfBalls] = useState('');
  const [condition, setCondition] = useState('');

  const [scheduleModalIsOpen, setScheduleModalIsOpen] = useState(false);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [available, setAvailable] = useState(true);

  const [facilityId, setFacilityId] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8080/api/users/email?email=${user.email}`)
        .then((response) => {
          setUserData(response.data);
        });

      axios.get(`http://localhost:8080/api/rentals`).then((response) => {
        const userRentals = response.data.filter(
          (rental) => rental.UserId === user.id
        );
        setRentals(userRentals);
      });

      if (user?.role === 'facility_owner') {
        // fetch all facilities data
        axios
          .get(`http://localhost:8080/api/sportFacilities/`)
          .then((response) => {
            // filter out the facilities that belong to the current user
            const userFacilities = response.data.filter(
              (facility) => facility.facility_owner_id === user.id
            );
            setFacilities(userFacilities);
          });
      }
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null); // Reset user to null
    navigate('/'); // Redirect to home page
  };

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  const handleAddFacilityClick = () => {
    navigate('/addFacility', { state: { id: userData.id } });
  };

  const handleSeeClick = (id) => {
    axios.get(`http://localhost:8080/api/status/${id}`).then((response) => {
      console.log(response.data.condition);
      setFacilityStatus((prevState) => ({
        ...prevState,
        [id]: response.data.condition,
      }));
    });
  };

  const handleUpdateClick = (id) => {
    axios.get(`http://localhost:8080/api/status/${id}`).then((response) => {
      // save the facility in state
      setEditingFacility(response.data);
      // set the number of balls and condition
      setNumberOfBalls(response.data.numberOfBalls);
      setCondition(response.data.condition);
      // open the modal
      setModalIsOpen(true);
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(editingFacility);

    if (editingFacility) {
      console.log(editingFacility);
      axios
        .put(`http://localhost:8080/api/status/${editingFacility.id}`, {
          numberOfBalls,
          condition,
        })
        .then((response) => {
          // success message
          toast.success('Stare teren actualizata cu succes!');

          // update the facilities in state
          setFacilities((prevFacilities) =>
            prevFacilities.map((facility) =>
              facility.id === editingFacility.id
                ? { ...facility, condition: response.data }
                : facility
            )
          );

          // close the modal and reset the state
          setModalIsOpen(false);
          setEditingFacility(null);
          setNumberOfBalls('');
          setCondition('');
        })
        .catch((error) => {
          // error message
          toast.error('Date introduse incorect!');
        });
    }
  };

  const handleAddScheduleClick = (id) => {
    setFacilityId(id);
    setScheduleModalIsOpen(true);
  };

  const handleScheduleFormSubmit = (e) => {
    e.preventDefault();

    const sportAvailability = {
      date: date,
      start_time: startTime,
      end_time: endTime,
      available: available,
    };

    axios
      .post(
        `http://localhost:8080/api/sportFacilityAvailabilities/${facilityId}`,
        sportAvailability
      )
      .then((response) => {
        console.log(response);
        setScheduleModalIsOpen(false);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="user-card">
      <div className="user-details">
        <div className="welcome-section">
          <h1>Salut, {userData.name.split(' ')[0]} !</h1>
          <img
            src={defaultProfileImage}
            alt="default"
            className="default-picture"
          />
        </div>
        <p>Nume: {userData.name}</p>
        <p>Rol: {userData.role}</p>
        <h2>Inchirieri:</h2>

        <div className="table-container">
          <table className="rentals-table">
            <thead>
              <tr>
                <th>Numar Inchiriere</th>
                <th>Data Inchiriere</th>
                <th>Cost</th>
                <th>Stare</th>
                <th>Actiuni</th>
              </tr>
            </thead>
            <tbody>
              {' '}
              {rentals?.map((rental) => (
                <tr key={rental.id}>
                  <td>{rental.id}</td>
                  <td>{new Date(rental.start_date).toLocaleDateString()}</td>
                  <td>{rental.totalCost}</td>
                  <td>{rental.status}</td>
                  <td>
                    {rental.status !== 'accepted' && (
                      <button className="pay-button">Pay</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {userData.role === 'facility_owner' && (
          <div>
            <h2>Terenurile tale:</h2>
            <div className="table-container">
              {' '}
              {/* Add this wrapper */}
              <table className="facilities-table">
                <thead>
                  <tr>
                    <th>Nume teren</th>
                    <th>Sport</th>
                    <th>Stare</th>
                    <th>Actiuni</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities?.map((facility) => (
                    <tr key={facility.id}>
                      <td>{facility.name}</td>
                      <td>{facility.sport_type}</td>
                      <td>{facilityStatus[facility.id] || facility.status}</td>
                      <td>
                        <div className="button-group">
                          <button
                            onClick={() => handleSeeClick(facility.id)}
                            className="see-button"
                          >
                            Arata
                          </button>
                          <button
                            onClick={() => handleUpdateClick(facility.id)}
                            className="update-button"
                          >
                            Actualizeaza stare teren
                          </button>
                          <button
                            onClick={() => {
                              handleAddScheduleClick(facility.id);
                            }}
                            className="add-facility-button"
                          >
                            Adauga Program Teren
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => {
                  setModalIsOpen(false);
                  setEditingFacility(null); // clear the editing facility when modal is closed
                }}
                className="modal-content"
                overlayClassName="modal-overlay"
              >
                <h2>Edit Facility</h2>
                <form onSubmit={handleFormSubmit} className="add-facility-form">
                  <label>
                    Number of Balls
                    <input
                      type="number"
                      name="numberOfBalls"
                      value={numberOfBalls}
                      onChange={(e) => setNumberOfBalls(e.target.value)}
                    />
                  </label>
                  <label>
                    Condition
                    <input
                      type="text"
                      name="condition"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                    />
                  </label>
                  <div className="button-container">
                    <button type="submit" className="save-button">
                      Salveaza
                    </button>
                    <button
                      type="button"
                      className="cancel-button"
                      onClick={() => setModalIsOpen(false)}
                    >
                      Anuleaza
                    </button>
                  </div>
                </form>
              </Modal>
            </div>

            <Modal
              isOpen={scheduleModalIsOpen}
              onRequestClose={() => setScheduleModalIsOpen(false)}
              className="modal-content"
              overlayClassName="modal-overlay"
            >
              <h2>Add Sport Facility Availability</h2>
              <form
                onSubmit={handleScheduleFormSubmit}
                className="add-facility-form"
              >
                <label>
                  Date
                  <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
                <label>
                  Start Time
                  <input
                    type="time"
                    name="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                </label>
                <label>
                  End Time
                  <input
                    type="time"
                    name="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </label>
                <label>
                  Available
                  <input
                    type="checkbox"
                    name="available"
                    checked={available}
                    onChange={() => setAvailable(!available)}
                  />
                </label>
                <div className="button-container">
                  <button type="submit" className="save-button">
                    Salveaza
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setScheduleModalIsOpen(false)}
                  >
                    Anuleaza
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        )}
        <button onClick={handleAddFacilityClick} className="logout-button">
            Adauga Teren
          </button>
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">
            Iesi din cont
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
