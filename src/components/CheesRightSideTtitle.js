import React from 'react'
import './CheesRightSideTtitle.css'

const CheesRightSideTtitle = () => {
  return (
    <>
      <div className="start-account-container">
        <p>First step is done, continue to finish onboarding</p>
      </div>

      <div className="route-container">
        <div className="square">
          <p>
            <img src="/images/done.png" />
          </p>
        </div>
        <div className="horizontal-line"></div>
        <div className="square">
          <p>2</p>
        </div>
      </div>
    </>
  );
}

export default CheesRightSideTtitle