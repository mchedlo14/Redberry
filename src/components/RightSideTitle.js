import React from 'react'
import './RightSideTitle.css'

const RightSideTitle = () => {
  return (
    <>
      <div className="start-account-container">
        <p>Start creating your account</p>
      </div>
      <div className='route-container'>
        <div className='routes'>
            <div className="first-square">
              <p>1</p>
            </div>
            <div className="horizontal-line"></div>
            <div className="second-square">
              <p>2</p>
            </div>
        </div>
        <div className='titles'>
          <p>Personal Information</p>
          <p>Chess Experience</p>
        </div>
      </div>
    </>
  );
}

export default RightSideTitle