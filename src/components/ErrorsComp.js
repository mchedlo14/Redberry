import React from 'react'
import './ErrorsComp.css'
const ErrorsComp = ({title,description}) => {
  return (
    <div className='error-wrapper'>
        <div className='error-title-container'>
          <div className='error-title-wrapper'>
            <i className="fas fa-exclamation-circle"></i>
            <p>{title}</p>
          </div>
          <div>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className='error-description-container'>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default ErrorsComp