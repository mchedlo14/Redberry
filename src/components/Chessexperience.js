import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheesRightSideTtitle from './CheesRightSideTtitle';
import './Chessexperience.css'
import ExperienceRightSideTitle from './ExperienceRightSideTitle';
import LeftSideTitle from './LeftSideTitle';

const Chessexperience = ({counter,setcounter}) => {
  const [data,setData] = useState([])
  const [level,setLevel] = useState('')
  const levels = [
    {
      label: "Begginer",
      value: "begginer",
    },
    {
      label: "Intermediate",
      value: "Intermediate",
    },
    {
      label: "Professional",
      value: "Professional",
    },
  ]

  
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
        <ExperienceRightSideTitle />
        <div className="form-title">
          <h2>Chess experience</h2>
          <p>This is basic informaton fields</p>
        </div>


        <div className='dropdown-container'>
          <select className='select' onChange={e => {setLevel(e.target.value)}}>
            {levels.map(item => <option value={item.value}>{item.label}</option>)}
          </select>


          {/* <div className='dropdown'>
            {data.map(item =><div className='dropdown-option'>
              <p>{item.name}</p>
              <div className='img-wrapper'>
                <img src={`https://chess-tournament-api.devtest.ge${item.image}`}/>
              </div>
            </div>)}
          </div> */}

        </div>

        <div className='radio-button-container'>
          <p className='radio-button-title'>Have you participated in the Redberry Championship? *</p>
          <div className='radio-button-wrapper'>
            <input type="radio" value={true} name="participated"/> Yes
            <input type="radio" value={false} name="participated"/> No
          </div>
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