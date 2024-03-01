import React from 'react';
import HoneymoonData from './Honeymoon data';
import './Honeymoon.css'
import { NavLink } from 'react-router-dom';

const Honeymoon = () => {
  return (
   <div className="beaches-container">
    <h2>Beaches</h2>
    <NavLink to='/booking'><div className="beach-list">
      {HoneymoonData.map((Honeymoon, index) => (
        <div key={index} className="beach">
          <img src={Honeymoon.image} alt={Honeymoon.name} className="beach-image" />
          <div className="beach-details">
            <h1>{Honeymoon.name}
            <p>{Honeymoon.location}</p> </h1>
           
           
            <i>{Honeymoon.description}</i>
          </div>
        </div>
      ))}
    </div></NavLink>
  </div>
 
);
};

export default Honeymoon;
