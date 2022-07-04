import React from 'react'
import './ErrorsComp.css'
const ErrorsComp = ({title,description}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default ErrorsComp