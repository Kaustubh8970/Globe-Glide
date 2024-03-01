// import React from 'react'
// import './wheretogo.css'

// export default function Wheretogo() {
//   return (
//     <div>
//       where to go
//     </div>
//   )
// }


import React, { useState } from 'react';
import './wheretogo.css';
import Beach from '../Beaches/Beach';
import Mountain from '../Mountains/Mountain';
import Spiritual from '../Spiritual/Spiritual';
import Honeymoon from '../Honeymoon/Honeymoon';

const WhereToGo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="where-to-go-container">
      <h2>Where To Go</h2>
      <div className="category-list">
        <div className="category" onClick={() => handleClick('beaches')}>Beaches</div>
        <div className="category" onClick={() => handleClick('mountains')}>Hill Station</div>
        <div className="category" onClick={() => handleClick('spiritual')}>Pilgrimage</div>
        <div className="category" onClick={() => handleClick('honeymoon')}>Honeymoon</div>
      </div>
      <div className="category-info" >
        {selectedCategory === 'beaches' && <Beach />}
        {selectedCategory === 'mountains' && <Mountain />}
        {selectedCategory === 'spiritual' && <Spiritual/>}
        {selectedCategory === 'honeymoon' && <Honeymoon />}
      </div>
    </div>
  )
};

export default WhereToGo;

