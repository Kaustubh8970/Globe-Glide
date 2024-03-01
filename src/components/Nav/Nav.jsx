import React from 'react'
import './Nav.css'
import { BsSuitcaseFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { NavLink  } from 'react-router-dom'
import {  useSelector } from 'react-redux';

export default function Nav() {
  const state= useSelector((state)=>state.bookHotel)
  return (
  <div className='NavBar'>
      <div className='logDiv'>
       
        <span>Globe-Glide</span>
      </div>
      <div className='menu'>
        <ul className='navlinks'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/aboutus'>About Us</NavLink>
          <NavLink to='/tickets'>My Bookings  <BsSuitcaseFill /> ({state.length})  </NavLink>
          
         </ul>

        {/* <IoMdClose className='icon'/> */}
    </div>
   <NavLink to='/signup'><button className='btn'>Sign Up</button></NavLink>
    {/* <HiBars3BottomLeft className='icon'/><IoMdClose className='icon'/> */}

       
  </div>
  )
}





