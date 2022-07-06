import React, {useEffect, useRef, useState } from 'react'
import ErrorsComp from './ErrorsComp'
import LeftSide from './LeftSide'
import './Personalinformation.css'
import RightSideTitle from './RightSideTitle'
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const PersonalInformation = ({counter,setcounter}) => {
  const [errData,setErrData] = useState([])
  const [isClear,setIsClear] = useState(false)
  const [icons,setIcons] = useState({
    name:false,
    email:false,
    number:false,
    date:false,
  })
  const errors = {
    name: {
      valid: false,
      title: "Invalid name",
      description: "Please enter valid name",
    },
    email: {
      valid: false,
      title: "Invalid email",
      description: "Please enter valid email"
    },
    number: {
      valid: false,
      title: "Invalid phone number",
      description: "Please enter valid phone number"
    },
    date: {
      valid: false,
      title: "Invalid date entered",
      description: "Please enter valid date"
    }
  };

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const numberRef = useRef(null)
  const dateRef = useRef(null)

  const formValidateName= (e) => {
    if(e.target.value.length > 2){
      errors.name.valid = true
      icons.name = true
    }else{
      errors.name.valid = false
      icons.name = false
    }
  }

  const formValidateEmail = (e) => {
    const Regex = /^[a-z0-9](.?[a-z0-9]){2,}@redberry.ge$/i;
    if(Regex.test(e.target.value)){
      errors.email.valid = true;
      icons.email = true
    }else{
      errors.email.valid = false;
      icons.email = false
    }
    
  }

  const formValidateNumber = (e) => {
    if (e.target.value[0] === "5" && e.target.value.length === 9){
      errors.number.valid = true
      icons.number = true
    }else{
      errors.number.valid = false
      icons.number = false
    }
  }

  const formValidateDate = (e) => {
    if(e.target.value){
      errors.date.valid = true
      icons.date = true
    }else{
      errors.date.valid = false
      icons.date = false
    }
  }

  const validate = () => {
    
    if(errData.length === 0){
      setcounter(counter + 1);
    }

  }


  const formSubmit =  () => {
    setErrData([])
    Object.values(errors).forEach(item => {
      if(item.valid === false){
      setErrData(errData => [...errData,{title:item.title,description:item.description}])
      }
    })
    setIsClear(true)
  }

  useEffect(() => {
    if(isClear === false){
      return
    }else{
      validate()
    }
  },[isClear])




  return (
    <div className="personal-information">
      <LeftSide />
      <div className="personal-form">
        <RightSideTitle />
        <div className="form-title">
          <h2>Personal infromation</h2>
          <p>This is basic informaton fields</p>
        </div>
        <div className="error-container">
          {errData.map((item, key) => (
            <ErrorsComp
              title={item.title}
              description={item.description}
              key={key}
            />
          ))}
        </div>
        <form>
          <div>
            <label ref={nameRef}>
              Name <span>*</span>
            </label>
            <img
              className={icons.name ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
            />
            <input
              required
              className={`input ${icons.name ? "notvalid" : ""}`}
              type="text"
              name="username"
              onFocus={() => (nameRef.current.style.display = "none")}
              onBlur={(e) => formValidateName(e)}
            />
          </div>

          <div>
            <label ref={emailRef}>
              Email address<span>*</span>
            </label>
            <img
              className={icons.email ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
            />
            <input
              required
              className="input"
              type="Email"
              name="email"
              onFocus={() => (emailRef.current.style.display = "none")}
              onBlur={(e) => formValidateEmail(e)}
            />
          </div>

          <div>
            <label ref={numberRef}>
              Phone number <span>*</span>
            </label>
            <img
              className={icons.number ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
            />
            <input
              required
              className="input"
              type="number"
              name="number"
              onFocus={() => (numberRef.current.style.display = "none")}
              onBlur={(e) => formValidateNumber(e)}
            />
          </div>

          <div>
            <label ref={dateRef}>
              Date of birth <span>*</span>
            </label>
            <img
              className={icons.date ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
            />
            <Flatpickr
              data-enable-time
              className="input"
              onClick={() => (dateRef.current.style.display = "none")}
              options={{ enableTime: false }}
              onBlur={(e) => formValidateDate(e)}
            />
          </div>
        </form>

        <div className="buttons-container">
          <button className="back-btn" onClick={() => setcounter(counter - 1)}>
            Back
          </button>
          <button className="next-btn" onClick={formSubmit}>
            Next <img src="/images/right-arrow.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation