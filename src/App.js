import React, {useState} from 'react';
import './App.css';
import {Header} from './components/header.js';
import {Main} from './components/main.js';
import {OutputData} from './components/outputData.jsx';

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
      [inputIde]:val
    }))
  }

  console.log(inputCustomer);
  console.log(inputCustomer);
  
  return (
    <div className="App">
      <Header />
      <Main inputCustomer={inputCustomer} 
      onChangeCustInput={callUserInput} />
      <OutputData inputValue={inputCustomer}/>
    </div>
  );
}

export default App;
