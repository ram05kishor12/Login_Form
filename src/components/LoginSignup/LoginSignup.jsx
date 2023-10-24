import React from 'react'
import { useState } from 'react'
import './LoginSignup.css'
import email_icon from'../Assests/email.png'
import password_icon from'../Assests/password.png'
import person_icon from'../Assests/person.png'
import { database } from '../Firebase/firebsecnfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'



export default function LoginSignup  () {
  const [action, setAction] = useState('Sign Up');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(database, email, password).then(data => {
      console.log(data,"authData");
    })
  }

 
  return ( 
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
           {action === "Login"?<div></div>:<div className="input">
               <img src={person_icon} alt=''/>  
              <input type="text" placeholder="Username" />
            </div>}
            
            <div className="input">
               <img src={email_icon} alt=''/>  
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
               <img src={password_icon} alt=''/>  
              <input type="password" placeholder="Password" />
            </div>
        </div>
        
        {action === "Sign"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
        <div className="submit-container">
            <form onsubmit={(e)=>handleSubmit(e)}><div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}><button>Sign Up</button></div></form>
            <form onsubmit={(e)=>handleSubmit(e)}><div className={action ==="Sign Up"?"submit gray":"submit"} onClick={ ()=>{setAction("Login")}} ><button >Login</button></div></form>
        </div>


    </div>
  )
}
