import React, { useState } from 'react'
import LeftSide from './LeftSide'
import './Personalinformation.css'
import RightSideTitle from './RightSideTitle'

const PersonalInformation = ({counter,setcounter}) => {
  const [userData,setUserData] = useState({})


  console.log(userData)
  const onSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="personal-information">
      <LeftSide />
      <div className="personal-form">
        <RightSideTitle />
        <div className="form-title">
          <h2>Personal infromation</h2>
          <p>This is basic informaton fields</p>
        </div>

        <form onSubmit={onSubmit}>
          <div>
            <label>
              Name <span>*</span>
            </label>
            <input className='input' type="text" onChange={e => e.target.value.length > 20 ? setUserData({name:e.target.value}):<></>}/>
          </div>
          {/* <input className="input" type="text" onChange={e => e.target.value.length > 20 ? setUserData({name:e.target.value}):<></>}/> */}
          <div>
            <label>
              Email address<span>*</span>
            </label>
            <input className="input" type="Email" />
          </div>

          <div>
            <label>
              Phone number <span>*</span>
            </label>
            <input className="input" type='number'/>
          </div>

          <div>
            <label>
              Date of birth <span>*</span>
            </label>
            <input className="input" type='date'/>
          </div>

          <div className="buttons-container">
            <button
              className="back-btn"
              onClick={() => setcounter(counter - 1)}
            >
              Back
            </button>
            <button
              className="next-btn "
              onClick={() => setcounter(counter + 1)}
            >
              Next <img src="/images/right-arrow.png" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInformation