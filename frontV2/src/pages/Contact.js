import React from 'react'
import Main from '../assets_poze/contacteazane.jpg'
import '../styles/Contact.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const notify = () => toast.success("Mesaj trimis cu succes!", {
    position: toast.POSITION.TOP_CENTER
});

const handleSubmit = (e) => {
  e.preventDefault();
  notify();
  navigate('/');
};


  return (
    <div className='contact-wrapper'>

        <div className='left-side' style={{backgroundImage:`url(${Main})`}}>

        </div>
        <div className='right-side'>
            <h1>Contacteaza-ne!</h1>

            <form id='contact-form' method="POST" onSubmit={handleSubmit}>
                <label htmlFor='name'>Nume</label>
                <input name='name' placeholder="Introduceti numele complet..." type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder="Introduceti email..." type='email'/>
                <label htmlFor='message'>Mesaj</label>
                <textarea rows='6' placeholder='Introduceti mesaj...' name='message' required></textarea>

                <button type='submit'>Trimiteti mesaj</button>
            </form>
        </div>

    </div>
  )
}

export default Contact