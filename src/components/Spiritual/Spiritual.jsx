// import React from 'react'

// export default function Spiritual() {
//   return (
//     <div>
//       Spiritual
      
//     </div>
//   )
// }


import React from 'react';
import spiritualData from './Spiritualdata';
import './Spiritual.css';
import { NavLink } from 'react-router-dom';

const Spiritual = () => {
  return (
    <div className="beaches-container">
      <h2>Pilgrimage Places</h2>
      <NavLink to='/booking'>
        <div className="beach-list">
          {spiritualData.map((spiritual, index) => (
            <div key={index} className="beach">
              <img src={spiritual.image} alt={spiritual.name} className="beach-image" />
              <div className="beach-details">
                <h1>{spiritual.name}</h1>
                <p>{spiritual.location}</p>
                <i>{spiritual.description}</i>
              </div>
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default Spiritual