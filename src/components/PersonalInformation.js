import React, { useEffect, useState } from 'react'
import ErrorsComp from './ErrorsComp'
import LeftSide from './LeftSide'
import './Personalinformation.css'
import RightSideTitle from './RightSideTitle'

const PersonalInformation = ({counter,setcounter}) => {
  const [errData,setErrData] = useState([])
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



  const formValidateName= (e) => {
    console.log(e.target.value)
    if(e.target.value.length > 2){
      errors.name.valid = true
    }else{
      errors.name.valid = false
    }
  }

  const formValidateEmail = (e) => {
    const Regex = /^[a-z0-9](.?[a-z0-9]){2,}@redberry.ge$/i;
    if(Regex.test(e.target.value)){
      errors.email.valid = true;
    }else{
      errors.email.valid = false;
    }
  }



  const formValidateNumber = (e) => {
    if (e.target.value[0] === "5" && e.target.value.length === 9){
      errors.number.valid = true
    }else{
      errors.number.valid = false
    }
  }

  const formValidateDate = (e) => {
    if(e.target.value){
      errors.date.valid = true
    }else{
      errors.date.valid = false
    }
  }

  const validate = () => {
    
    if(errData.length === 0){
      setcounter(counter + 1)
    }
  }

  const formSubmit =  () => {
     setErrData([])

     Object.values(errors).forEach(item => {
      if(item.valid === false){
      setErrData(errData => [...errData,{title:item.title,description:item.description}],validate)
      }
    })
  
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
        <div className='error-container'>
          {errData.map((item,key) => <ErrorsComp title={item.title} description={item.description} key={key}/>)}
        </div>
        <form>
          <div>
            <label>
              Name <span>*</span>
            </label>
            <input className='input' type="text" name='username'  onBlur={(e) => formValidateName(e)}/>
          </div>
      
          <div>
            <label>
              Email address<span>*</span>
            </label>
            <input className="input" type="Email" name='email' onBlur={(e) => formValidateEmail(e)}/>
          </div>

          <div>
            <label>
              Phone number <span>*</span>
            </label>
            <input className="input" type='number' name='number'  onBlur={(e) => formValidateNumber(e)}/>
          </div>

          <div>
            <label>
              Date of birth <span>*</span>
            </label>
            <input className="input" type='date' name='date' onBlur={(e) => formValidateDate(e)}/>
          </div>
        </form>

        <div className="buttons-container">
            <button
              className="back-btn"
              onClick={() => setcounter(counter - 1)}
            >
              Back
            </button>
            <button
              className="next-btn"
              onClick={formSubmit}
            >
              Next <img src="/images/right-arrow.png" />
            </button>
          </div>
      </div>
    </div>
  );
}

export default PersonalInformation