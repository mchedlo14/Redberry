import React, {useEffect, useRef, useState } from 'react'
import ErrorsComp from './ErrorsComp'
import LeftSide from './LeftSide'
import './Personalinformation.css'
import RightSideTitle from './RightSideTitle'
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
const PersonalInformation = ({counter,setcounter,finalInfo}) => {
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
  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)
  const inputNumberRef = useRef(null)
  const inputDateRef = useRef(null)
  
  

  useEffect(() => {
    if(name.length > 2){
      errors.name.valid = true
      icons.name = true
      finalInfo.name = name
      nameRef.current.style.display = "none"
      inputNameRef.current.style.backgroundColor = 'white'
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
      finalInfo.email = email
      emailRef.current.style.display = "none"
      inputEmailRef.current.style.backgroundColor = 'white'
    }else{
      errors.email.valid = false;
      icons.email = false
    }
  },[email])


  useEffect(() => {
    if (number[0] === "5" && number.length === 9){
      errors.number.valid = true
      icons.number = true
      finalInfo.phone = number
      numberRef.current.style.display = 'none'
      inputNumberRef.current.style.backgroundColor = 'white'
    }else{
      errors.number.valid = false
      icons.number = false
    }
  },[number])


  useEffect(() => {
    if(date){
      errors.date.valid = true
      icons.date = true
      finalInfo.date_of_birth = date
      dateRef.current.style.display = 'none'
      if(finalInfo.date_of_birth !== ''){
        inputDateRef.current.style.color = 'black'
      }else{
        inputDateRef.current.style.color = 'white'
      }
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
      setErrData(errData => [...errData,{title:item.title,description:item.description}],validate)
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
  },[formSubmit])

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
              alt='success-icon'
            />
            <input
              required
              className={`input ${icons.name ? "notvalid" : ""}`}
              type="text"
              name="username"
              ref={inputNameRef}
              onFocus={() => (nameRef.current.style.display = "none",inputNameRef.current.style.backgroundColor = '#E9ECEF')}
              onChange={e => (setGlobalState('name',e.target.value),setName(e.target.value))}
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
              alt='success-icon'
            />
            <input
              required
              className="input"
              type="Email"
              name="email"
              ref={inputEmailRef}
              onFocus={() => (emailRef.current.style.display = "none",inputEmailRef.current.style.backgroundColor = '#E9ECEF')}
              value={email}
              onChange={e => (setGlobalState('email',e.target.value),setEmail(e.target.value))}
            />
          </div>

          <div>
            <label ref={numberRef}>
              Phone number <span>*</span>
            </label>
            <img
              className={icons.number ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
              alt='success-icon'
            />
            <input
              required
              className="input"
              type="number"
              name="number"
              ref={inputNumberRef}
              onFocus={() => (numberRef.current.style.display = "none",inputNumberRef.current.style.backgroundColor = '#E9ECEF')}
              value={number}
              onChange={e => (setGlobalState('number',e.target.value),setNumber(e.target.value))}
            />
          </div>

          <div>
            <label ref={dateRef}>
              Date of birth <span>*</span>
            </label>
            <img
              className={icons.date ? "valid-icon" : "valid-icon-none"}
              src="/images/check-circle-fill.png"
              alt='success-icon'
            />
            <input type='date' className='input' value={date} ref={inputDateRef} onChange={e => (setGlobalState('date',e.target.value),setDate(e.target.value))}/>
          </div>
        </form>

        <div className="buttons-container">
          <button className="back-btn" onClick={() => setcounter(counter - 1)}>
            Back
          </button>
          <button className="next-btn" onClick={formSubmit}>
            Next <img src="/images/right-arrow.png" alt='right-arrow'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation