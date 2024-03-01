import React from 'react';
import mountainData from './mountainData';
import './Mountain.css';
import { NavLink } from 'react-router-dom';

const Mountain = () => {
  return (
    <div className="beaches-container">
      <h2>Mountain</h2>
      <NavLink to='/booking'>
        <div className="beach-list">
          {mountainData.map((mountain, index) => (
            <div key={index} className="beach">
              <img src={mountain.image} alt={mountain.name} className="beach-image" />
              <div className="beach-details">
                <h1>{mountain.name}</h1>
                <p>{mountain.location}</p>
                <i>{mountain.description}</i>
              </div>
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default Mountain
