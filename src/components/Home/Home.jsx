import React, { useRef, useEffect } from 'react';
import './Home.css';
import Famousplaces from '../famousplaces/Famousplaces';
import WhereToGo from '../wheretogo/Wheretogo';
import Reviews from '../reviews/reviews';
import BgVideo from '../video & images/video (2160p).mp4'



export default function Home() {
  return (
    <div>
      <div className='main'>
        <div className="overlay"></div>
        <video src={BgVideo} autoPlay loop muted></video>
        <div className="content">
        <h1 className='head'>Time To Travel 🛫
          <p className='para'>Vacation on <span className='spin'>an Island</span></p></h1> 

        </div>
        </div>

      <Famousplaces />

      <WhereToGo/>
      <Reviews />
    </div>
  );
}
