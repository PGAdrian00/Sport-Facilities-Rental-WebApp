import React,{useState, useContext} from "react";
import "../styles/Modal.css";
import Eye from "../assets/eye.svg";
import { UserContext } from "../UserContext";

function Modal(props) {

  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

    const [showPassword,setShowPassword]=useState(false)

    const[ enteredEmail, setEnteredEmail] = useState("");
    const[ enteredPassword, setEnteredPassword] = useState("");

    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    };
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    };


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
              props.setOpenModal(false);
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
          <input className='input' name='email' type='email' onChange={emailChangeHandler} value={enteredEmail}/>
          <label htmlFor="password">Parola</label>
          <input className='input' id='pass' name='password' type='password' onChange={passwordChangeHandler} value={enteredPassword}/>
          <p>am uitat parola</p>
          <img src={Eye} alt='eye' className="eye" onClick={password}/>
        </div>
        <div className="footer-modal">
          <button
            onClick={() => {
              // console.log(enteredEmail);
              // console.log(enteredPassword);
              props.setOpenModal(false);
              const userData = {
                userEmail: enteredEmail,
                userPassword: enteredPassword,
              };
              props.doLogin(userData)
              // setUser(userData)
              
              
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
