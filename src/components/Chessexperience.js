import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheesRightSideTtitle from './CheesRightSideTtitle';
import './Chessexperience.css'
import ExperienceRightSideTitle from './ExperienceRightSideTitle';
import LeftSideTitle from './LeftSideTitle';
import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState,useGlobalState} = createGlobalState({
  experience_level:'',
  already_participated:null,
  character_id:2
 })



const Chessexperience = ({counter,setcounter,cheesData,personalInfo}) => {
  const [data,setData] = useState([])
  const [level,setLevel] = useGlobalState('experience_level')
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
  const [prevPageData,setprevPageData] = useState(personalInfo);
  

  
  useEffect(()=>{
    axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => setData(res.data))
  },[])


  const sendData = () => {
    setcounter(counter + 1)
  }

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
            {levels.map(item => <option onChange={e => setGlobalState('experience_level',e.target.value)} value={item.value}>{item.label}</option>)}
          </select>


          <div className='dropdown'>
            <select className='select'>
              {data.map(item => {
                return <option>{item.name}</option>
              })}
            </select>
          </div>

        </div>

        <div className='radio-button-container'>
          <p className='radio-button-title'>Have you participated in the Redberry Championship? *</p>
          <div className='radio-button-wrapper'>
            <input type="radio" value={true} onChange={e => cheesData.already_participated = e.target.value} name="participated"/> Yes
            <input type="radio" value={false} onChange={e => cheesData.already_participated = e.target.value} name="participated"/> No
          </div>
      </div>

        <div className='chees-buttons-container'>
          <button className='back-btn' onClick={() => setcounter(counter - 1)}>Back</button>
          <button className='next-btn' onClick={sendData}>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Chessexperience