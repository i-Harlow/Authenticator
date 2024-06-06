import React, { useState } from 'react'
import  "../Styles/registrationComponent.css"
import Navbar from './Navbar'
import {useNavigate} from "react-router-dom";



function RegistrationComponent() {

    const navigate= useNavigate()

    const [userData, setUserdata]=useState({
        email:"",
        username:"",
        password:""
    })

    function handleInput(event){
        // console.log(event.target.name, event.target.value)
        setUserdata((prev)=>{
            return  {
                ...prev, [event.target.name]:event.target.value         
            }
        })
    }

    function handleSubmit(){
        console.log("handleSubmit function called");
        fetch("http://localhost:8080/registration", {
            method:"POST",
            body:JSON.stringify(userData),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.status==200){
                navigate("/login")
            }
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  return (

    <div className="registration-container">
        <Navbar/>
        <h2>Register</h2>
        <div>
            <div className="input-group">
                <label name="email">Email</label>
                <input type="email" onChange={handleInput} id="email" name="email" autoComplete="current-email" required/>
            </div>
            <div className="input-group">
                <label name="username">Username</label>
                <input type="text" onChange={handleInput} id="username" name="username" autoComplete="current-username" required/>
            </div>
            <div className="input-group">
                <label name="password">Password</label>
                <input type="password" onChange={handleInput} id="password" name="password" autoComplete="current-password" required/>
            </div>
            <button type="submit" onClick={handleSubmit}>Register</button>
        </div>
    </div>
  )
}

export default RegistrationComponent