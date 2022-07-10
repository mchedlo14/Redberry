import React, { useRef } from 'react'
import './ErrorsComp.css'
const ErrorsComp = ({title,description}) => {
  const errorRef = useRef(null)
  const deleteError = () => {
    errorRef.current.style.display = 'none'
  }
  return (
    <div className='error-wrapper' ref={errorRef}>
        <div className='error-title-container'>
          <div className='error-title-wrapper'>
            <i className="fas fa-exclamation-circle"></i>
            <p>{title}</p>
          </div>
          <div>
            <i className="fas fa-times" onClick={deleteError}></i>
          </div>
        </div>
        <div className='error-description-container'>
          <p>{description}</p>
        </div>
    </div>
  )
}

export default ErrorsComp