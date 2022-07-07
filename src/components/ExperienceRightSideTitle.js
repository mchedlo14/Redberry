import React from 'react'
import './ExperienceRightSideTitle.css'

const ExperienceRightSideTitle = () => {
  return (
    <>
      <div className="start-account-container">
        <p>First step is done, continue to finish onboarding</p>
      </div>

      <div className="route-container">
        <div className="routes">
          <div className="first-square">
            <img src='/images/done.png'/>
          </div>
          <div className="horizontal-line"></div>
          <div className="chess-second-square">
            <p>2</p>
          </div>
        </div>
        <div className="titles">
          <p>Personal Information</p>
          <p>Chess Experience</p>
        </div>
      </div>
    </>
  );
}

export default ExperienceRightSideTitle