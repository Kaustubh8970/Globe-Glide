// import React from 'react'


// export default function Famousplaces() {
//   return (
//     <div>
//       Famous places
//     </div>
//   )
// }

import React from 'react';
import './famousplaces.css';
import Effel from '../video & images/effel tower.jpeg';
import Machu from '../video & images/machu.jpeg';
import Taj from '../video & images/taj mahal.jpeg';
import Wall from '../video & images/wall.avif';
import { NavLink } from 'react-router-dom';

const FamousPlaces = () => {
  const famousPlacesData = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic iron lattice tower located on the Champ de Mars in Paris.",
      imageUrl : Effel
    },
    {
      name: "Great Wall of China",
      location: "China",
      description: "Series of fortifications made of stone, brick, tamped earth, wood, and other materials.",
      imageUrl : Wall
    },
    {
      name: "Machu Picchu",
      location: "Cusco Region, Peru",
      description: "Incan citadel set high in the Andes Mountains in Peru.",
      imageUrl : Machu
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "Ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
      imageUrl : Taj
    }
    // Add more famous places as needed
  ];

  return (
    <div className='container'>
    <h1>Famous Places</h1>

     <NavLink to='/booking'> <div className="famous-places-list">
        {famousPlacesData.map((place, index) => (
          <div key={index} className="famous-place">
            <img src={place.imageUrl} alt={place.name} className="famous-place-image" />
            <div className='descrip'>
            <h3>{place.name}</h3>
            <p><strong>Location:</strong> {place.location}</p>
            <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
      </NavLink>
    </div>
  );
};

export default FamousPlaces;
