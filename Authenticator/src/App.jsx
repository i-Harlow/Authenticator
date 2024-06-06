import './App.css'
import  { BrowserRouter, Routes, Route  } from "react-router-dom";

import HomeComponent from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent'
import RegistrationComponent from './Components/RegistrationComponent';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/signup" element={<RegistrationComponent/>}/>
      </Routes>
  </BrowserRouter>
 

  )
}

export default App
