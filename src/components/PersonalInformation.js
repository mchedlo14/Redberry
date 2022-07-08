import React, {useEffect, useRef, useState } from 'react'
import ErrorsComp from './ErrorsComp'
import LeftSide from './LeftSide'
import './Personalinformation.css'
import RightSideTitle from './RightSideTitle'
import "flatpickr/dist/themes/material_green.css";
import { createGlobalState } from 'react-hooks-global-state';



 const {setGlobalState,useGlobalState} = createGlobalState({
  name:'',
  email:'',
  number:'',
  date:''
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
const icons ={
  name:false,
  email:false,
  number:false,
  date:false,
}
const PersonalInformation = ({counter,setcounter,personalInfo}) => {
  const [errData,setErrData] = useState([])
  const [isClear,setIsClear] = useState(false)
  const [name,setName] = useGlobalState('name')
  const [email,setEmail] = useGlobalState('email')
  const [number,setNumber] = useGlobalState('number')
  const [date,setDate] = useGlobalState('date')

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const numberRef = useRef(null)
  const dateRef = useRef(null)


  useEffect(() => {
    if(name.length > 2){
      errors.name.valid = true
      icons.name = true
      personalInfo.name = name
    }else{
      errors.name.valid = false
      icons.name = false
    }
  },[name])


  useEffect(() => {
    const Regex = /^[a-z0-9](.?[a-z0-9]){2,}@redberry.ge$/i;
    if(Regex.test(email)){
      errors.email.valid = true;
      icons.email = true
      personalInfo.email = email
    }else{
      errors.email.valid = false;
      icons.email = false
    }
  },[email])


  useEffect(() => {
    if (number[0] === "5" && number.length === 9){
      errors.number.valid = true
      icons.number = true
      personalInfo.phone = number
    }else{
      errors.number.valid = false
      icons.number = false
    }
  },[number])


  useEffect(() => {
    if(date){
      errors.date.valid = true
      icons.date = true
      personalInfo.date_of_birth = date
    }else{
      errors.date.valid = false
      icons.date = false
    }
  },[date])

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
    if(Object.values(errors).length === 0){
      validate()
    }

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
              onChange={e => setGlobalState('name',e.target.value)}
              value={name}
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
              value={email}
              onChange={e => setGlobalState('email',e.target.value)}
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
              value={number}
              onChange={e => setGlobalState('number',e.target.value)}
            />
          </div>

          <div>
            {/* <label ref={dateRef}>
              Date of birth <span>*</span>
            </label> */}
            <img
              className={icons.date ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
            />
            {/* <Flatpickr
              data-enable-time
              className="input"
              onClick={() => (dateRef.current.style.display = "none")}
              options={{ enableTime: false }}
              value={date}
              onChange={e => setGlobalState('date',e.target.value)}
            /> */}
            <input type='date' className='input' onChange={e => setGlobalState('date',e.target.value)}/>
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