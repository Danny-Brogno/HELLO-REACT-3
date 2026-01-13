import React, { useState, useEffect } from 'react';
import './App.css';
import {Header} from './components/header.js';
import {Main} from './components/main.js';
import {OutputData} from './components/outputData.jsx';
// import {OutputData} from './components/userinput.jsx';

function App() {
  
  const [inputCustomer, setInputCustomer] = useState({
    beginInvestment: 4000,
    annualInvestment: 1200,
    returnInvestment: 6,
    yearInvestment: 35
  })

  function callUserInput(inputIde, val) {
    setInputCustomer((prev)=>({
      ...prev,
      [inputIde]: + val
    }))
  }


  useEffect(() => {
    console.log("Updated state:", inputCustomer);
  }, [inputCustomer]); // This runs every time inputCustomer changes
  
  return (
    <div className="App">
      <Header />
      <Main inputCustomer={inputCustomer} onChangeCustInput={callUserInput} />
      <OutputData inputVal={inputCustomer} onChangeCustInput={callUserInput}/>
    </div>
  );
}

export default App;
