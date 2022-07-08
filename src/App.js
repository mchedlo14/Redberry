import { useEffect, useState } from 'react';
import './App.css';
import GetStarted from './components/GetStarted'
import PersonalInformation from './components/PersonalInformation';
import Chessexperience from './components/Chessexperience'
import FinalPage from './components/FinalPage';


function App() {
  const [counter,setCounter] = useState(2)
  const personalInfo = {name:'',email:'',phone:'',date_of_birth:''}
  const cheesData = {experience_level:'',already_participated:null,character_id:2}
  //experience_level:'',already_participated:null,character_id:null

  useEffect(() => {
    console.log('persondata',personalInfo)
  },[personalInfo])
  return (
    <div>
      


      {counter === 0 ? (<GetStarted counter={counter} setcounter={setCounter} />)
      :
      counter === 1 ? (<PersonalInformation counter={counter} setcounter={setCounter} personalInfo={personalInfo}/>)
      :
      counter === 2 ? (<Chessexperience counter={counter} setcounter={setCounter} personalInfo={personalInfo} cheesData={cheesData}/>)
      :
      counter === 3 ? (<FinalPage counter={counter} setcounter={setCounter}/>) : <></>
    }
    </div>
  );
}

export default App;
