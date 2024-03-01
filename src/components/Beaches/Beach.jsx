// import React from 'react'

// export default function Beach() {
//   return (
//     <div>
//       Beach
//     </div>
//   )
// }



import React from 'react';
import beachData from './beach data';
import './Beach.css'
import { NavLink } from 'react-router-dom';

const Beach = () => {
  return (
   <div className="beaches-container">
    <h2>Beaches</h2>
    <NavLink to='/booking'><div className="beach-list">
      {beachData.map((beach, index) => (
        <div key={index} className="beach">
          <img src={beach.image} alt={beach.name} className="beach-image" />
          <div className="beach-details">
            <h1>{beach.name}
            <p>{beach.location}</p> </h1>
           
           
            <i>{beach.description}</i>
          </div>
        </div>
      ))}
    </div></NavLink>
  </div>
 
);
};

export default Beach;
