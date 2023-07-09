import React from 'react'
import Main from '../assets_poze/contacteazane.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact-wrapper'>

        <div className='left-side' style={{backgroundImage:`url(${Main})`}}>

        </div>
        <div className='right-side'>
            <h1>Contacteaza-ne!</h1>

            <form id='contact-form' method="POST">
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