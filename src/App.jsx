import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

import Footer from './components/footer/Footer'
import About from './components/Aboutus/About';
import Tickets from './components/Tickets/Tickets';
import Booking from './components/Bookings/booking';
import Success from './components/Success/Success';
import SignUp from './components/Signup/SIgnup';


const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutus' element={<About/>} />
          <Route path='/tickets' element={<Tickets/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/success' element={<Success/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
