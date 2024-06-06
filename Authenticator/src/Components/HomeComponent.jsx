import React from 'react'
import  "../Styles/homeComponent.css"
import Navbar from './Navbar';

function HomeComponent() {
  return (    
    <div className="content">
      <Navbar/>
      <h1>Welcome to Our Website</h1>
      <p>Your success starts here.</p>
    </div>
  )
}

export default HomeComponent