import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheesRightSideTtitle from './CheesRightSideTtitle';
import './Chessexperience.css'
import LeftSideTitle from './LeftSideTitle';

const Chessexperience = ({counter,setcounter}) => {
  const [data,setData] = useState([])
  
  useEffect(()=>{
    axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => setData(res.data))
  },[])


  return (
    <div className="chess-experience">
      <div className="chess-experience-image-container">
        <LeftSideTitle />
        <img
          className="chess-experience-image"
          src="/images/chess-experience.png"
        />
      </div>
      <div className="chess-experience-right-side">
        <CheesRightSideTtitle />
        <div className="form-title">
          <h2>Chess experience</h2>
          <p>This is basic informaton fields</p>
        </div>


        <div className='dropdown-container'>
          <select className='select'>
            <option selected disabled>Level of Knowledge</option>
            <option value='Begginer'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Professional'>Professional</option>
          </select>

          <select className='select'>
            <option selected disabled>Choose your Character</option>
            <option value='Begginer'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Professional'>Professional</option>
          </select>
        </div>

        <div className='chees-buttons-container'>
          <button className='back-btn' onClick={() => setcounter(counter - 1)}>Back</button>
          <button className='next-btn' onClick={() => setcounter(counter + 1)}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Chessexperience