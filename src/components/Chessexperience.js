import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheesRightSideTtitle from './CheesRightSideTtitle';
import './Chessexperience.css'
import LeftSideTitle from './LeftSideTitle';
import { createGlobalState } from 'react-hooks-global-state';

const {setGlobalState,useGlobalState} = createGlobalState({
  experience_level:'',
  already_participated:null,
  character_id:2
 })



const Chessexperience = ({counter,setcounter,finalInfo}) => {
  const [data,setData] = useState([])
  const levels = [
    {
      label: "Begginer",
      value: "beginner",
    },
    {
      label: "Intermediate",
      value: "normal",
    },
    {
      label: "Professional",
      value: "professional",
    },
  ]  

  useEffect(()=>{
    axios.get('https://chess-tournament-api.devtest.ge/api/grandmasters')
    .then(res => setData(res.data))
  },[])

  const sendData = () => {
    axios.post('https://chess-tournament-api.devtest.ge/api/register',finalInfo)
    .then(res => res)
    .catch(err => console.log(err))

    setcounter(counter + 1)
  }


  const alreadyParticipated = (e) => {
    const str1 = e.target.value
    const bool1 = str1 === 'true'
    finalInfo.already_participated = bool1
  }

  const notParticipated = (e) => {
    const str2 = e.target.value
    const bool2 = str2 === 'false'
    finalInfo.already_participated = bool2
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
        <CheesRightSideTtitle />
        <div className="form-title">
          <h2>Chess experience</h2>
          <p>This is basic informaton fields</p>
        </div>


        <div className='dropdown-container'>
          <select className='select' onChange={e => {finalInfo.experience_level=e.target.value}}>
            <option selected disabled>level of knowledge</option>
            {levels.map((item,index) => <option key={index} onChange={e => setGlobalState('experience_level',e.target.value)} value={item.value}>{item.label}</option>)}
          </select>


          <div className='dropdown'>
            <select className='select' onChange={e => finalInfo.character_id = e.target.value}>
            <option selected disabled>Choose Your Character</option>
              {data.map((item,index) => {
                return <option key={index} value={item.id}>{item.name}</option>
              })}
            </select>
          </div>

        </div>

        <div className='radio-button-container'>
          <p className='radio-button-title'>Have you participated in the Redberry Championship? *</p>
          <div className='radio-button-wrapper'>
            <input type="radio" value={true}  onChange={alreadyParticipated} name="participated"/> Yes
            <input type="radio" value={false} onChange={notParticipated} name="participated"/> No
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