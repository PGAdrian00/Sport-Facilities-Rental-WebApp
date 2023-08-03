import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/TerenPage.css';
import '../styles/ModalEditSportFacility.css';
import TerenPeHarta from '../components/TerenPeHarta';
import { UserContext } from '../UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

Modal.setAppElement('#root');

const TerenPage = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  let { terenId } = useParams();
  const [teren, setTeren] = useState({});
  // const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const [isEditFormVisible, setEditFormVisible] = useState(false);

  // State variable for storing edited data
  const [editedTeren, setEditedTeren] = useState({});

  //edit form preparation for update
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [sport_type, setSportType] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [is_indoor, setIsIndoor] = useState(false);
  const [has_night_lights, setHasNightLights] = useState(false);
  const [price_per_hour, setPricePerHour] = useState(0);
  const [image_source, setImageSource] = useState('');
  const [availability, setAvailability] = useState('');

  const [intervSelect, setIntervSelect] = useState('');

  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  //Pentru noul sistem de inchiriere

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/sportFacilities/${terenId}`)
      .then((res) => {
        if (res.data) {
          setAvailability(res.data.SportFacilityAvailabilities);

          setTeren(res.data);
          setName(res.data.name);
          setDescription(res.data.description);
          setSportType(res.data.sport_type);
          setLocation(res.data.location);
          setAddress(res.data.address);
          setIsIndoor(res.data.is_indoor);
          setHasNightLights(res.data.has_night_lights);
          setPricePerHour(res.data.price_per_hour);
          setImageSource(res.data.image_source);
        }
      })
      .catch((err) => console.log(err));
  }, [terenId]);

  // const handleTimeSlotSelection = (timeSlot) => {
  //   setSelectedTimeSlot(timeSlot);
  // };

  const handleRentClick = () => {
    if (intervSelect) {
      // Perform the rental action here using the selectedTimeSlot
      console.log('Renting at time slot:', intervSelect);

      toast.success('Inchiriere inregistrata!');
      // axios.post(`http://localhost:8080/api/sportFacilitiesAvailability/${intervSelect}/${user.id}`)
      axios.post(
        `http://localhost:8080/api/sportFacilityAvailabilities/${intervSelect}/${user.id}`
      );
    } else {
      console.log('Please select a time slot.');
    }
  };

  const handleEditClick = () => {
    // Perform the edit action here
    setEditFormVisible(true);
    setEditedTeren(teren);
    console.log('Edit button clicked');
  };

  const handleDeleteClick = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this sport facility?',
      buttons: [
        {
          label: 'Da',
          onClick: () => {
            axios
              .delete(`http://localhost:8080/api/sportFacilities/${terenId}`)
              .then((res) => {
                toast.success('Teren sters cu succes!');
                navigate('/'); // navigates to home page
              })
              .catch((err) => {
                toast.error('Dificultati intampinate la stergere.');
                console.log(err);
              });
          },
        },
        {
          label: 'Nu',
          onClick: () => console.log('Click Nu'),
        },
      ],
    });
  };

  const handleFormChange = (event) => {
    setEditedTeren({
      ...editedTeren,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Submit edited data to your server
    axios
      .put(`http://localhost:8080/api/sportFacilities/${terenId}`, {
        name,
        description,
        sport_type,
        location,
        address,
        is_indoor,
        has_night_lights,
        price_per_hour,
        image_source,
      })
      .then((response) => {
        console.log(response);
        setTeren(response.data);
        setEditFormVisible(false);
        toast.success('Actualizare cu succes!');
      })
      .catch((error) => {
        console.error(error);
        toast.error('A aparut o eroare la actualizarea datelor');
      });
  };

  return (
    <div className="teren-container">
      <h1 className="teren-name">{teren.name}</h1>
      <div className="teren-info">
        <div className="left-side">
          <div className="teren-image-container">
            <img src={teren.image_source} alt="Teren" />
          </div>
          <div className="reservation">
            <h2>Selectati date inchiriere:</h2>
            <div className="calendar">
              <select
                placeholder="Selectati ziua"
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                <option value="">Selectati ziua</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
              </select>

              <select
                placeholder="Selectati luna"
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                <option value="">Selectati luna</option>
                <option value="Iulie">Iulie</option>
              </select>

              <select
                placeholder="Selectati interval"
                onChange={(e) => {
                  setIntervSelect(e.target.value);
                }}
              >
                <option value="">Selectati interval</option>
                {availability ? (
                  availability?.map((date) => {
                    // TODO: Stilizezi tu info de aici
                    // TODO: Filtrezi datele in functie de ziua curenta
                    // adaug sportfavailabilities dintr o zi cu mai multe intervale orare

                    var dateObj = new Date(date.date);
                    var month = dateObj.getUTCMonth() + 1;
                    var day = dateObj.getUTCDay();

                    return (
                      <option key={date.id} value={date.id}>
                        {date.start_time}-{date.end_time}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </select>
            </div>
            {user && (
              <>
                <button className="rent-button" onClick={handleRentClick}>
                  Inchiriaza
                </button>
              </>
            )}
          </div>
        </div>
        <div className="teren-details">
          <h3>Descriere:</h3>
          <p>{teren.description}</p>
          <h3>Tipul Sportului:</h3>
          <p>{teren.sport_type}</p>
          <h3>Adresa:</h3>
          <p>{teren.address}</p>
          <h3>Conditii:</h3>
          <p>
            Inauntru: {teren.is_indoor ? 'Da' : 'Nu'}
            <br />
            Nocturna: {teren.has_night_lights ? 'Da' : 'Nu'}
          </p>
          <h3>Pret pe ora:</h3>
          <p>{teren.price_per_hour} RON</p>
          {teren.location && <TerenPeHarta key={terenId} teren={teren} />}

          {user &&
            (user.role === 'facility_owner' ||
              user.role === 'administrator') && (
              <>
                <button onClick={handleEditClick} className="edit-button">
                  Editare
                </button>
                <button onClick={handleDeleteClick} className="delete-button">
                  Sterge
                </button>
              </>
            )}

          {isEditFormVisible && (
            <form onSubmit={handleFormSubmit} className="add-facility-form">
              <label>
                Nume Teren
                <input
                  type="text"
                  name="name"
                  value={editedTeren.name}
                  onChange={handleFormChange}
                />
              </label>
              {/* ... other fields ... */}
              <button type="submit">Salveaza</button>
            </form>
          )}
        </div>
      </div>
      <Modal
        isOpen={isEditFormVisible}
        onRequestClose={() => setEditFormVisible(false)}
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
        onAfterClose={() => (document.body.style.overflow = 'unset')}
        contentLabel="Update Teren"
        className="edit-modal"
        overlayClassName="overlay"
      >
        <h2>Edit Teren</h2>
        <form onSubmit={handleFormSubmit} className="add-facility-form">
          <label>
            Nume Teren
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Descriere
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            Tipul Sportului
            <input
              type="text"
              name="sport_type"
              value={sport_type}
              onChange={(e) => setSportType(e.target.value)}
            />
          </label>
          <label>
            Adresa
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label>
            Conditii Inauntru
            <input
              type="checkbox"
              name="is_indoor"
              checked={is_indoor}
              onChange={(e) => setIsIndoor(e.target.checked)}
            />
          </label>
          <label>
            Conditii Nocturna
            <input
              type="checkbox"
              name="has_night_lights"
              checked={has_night_lights}
              onChange={(e) => setHasNightLights(e.target.checked)}
            />
          </label>
          <label>
            Pret pe ora
            <input
              type="number"
              name="price_per_hour"
              value={price_per_hour}
              onChange={(e) => setPricePerHour(e.target.value)}
            />
          </label>
          <label>
            Image Source
            <input
              type="text"
              name="image_source"
              value={image_source}
              onChange={(e) => setImageSource(e.target.value)}
            />
          </label>
          <div className="button-container">
            <button type="submit" className="save-button">
              Salveaza
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => setEditFormVisible(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default TerenPage;
