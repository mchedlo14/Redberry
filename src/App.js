import { useState } from 'react';
import './App.css';
import GetStarted from './components/GetStarted'
import PersonalInformation from './components/PersonalInformation';
import Chessexperience from './components/Chessexperience'
import FinalPage from './components/FinalPage';


function App() {
  const [counter,setCounter] = useState(0)

  return (
    <div>

      {counter === 0 ? (<GetStarted counter={counter} setcounter={setCounter}/>)
      :
      counter === 1 ? (<PersonalInformation counter={counter} setcounter={setCounter}/>)
      :
      counter === 2 ? (<Chessexperience counter={counter} setcounter={setCounter}/>)
      :
      counter === 3 ? (<FinalPage counter={counter} setcounter={setCounter}/>) : <></>
    }
    </div>
  );
}

export default App;
