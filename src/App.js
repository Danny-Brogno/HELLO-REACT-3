import React, { useState } from 'react'; // Added useState
import './App.css';
import { generatepdf } from './util/generateReport.js'; 
import { calculateInvestmentResults } from './util/investment.js';

// Added missing component imports
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { OutputData } from './components/outputData.jsx';

function App() {
  const [inputCustomer, setInputCustomer] = useState({
    beginInvestment: 4000,
    annualInvestment: 1200,
    returnInvestment: 6,
    yearInvestment: 15
  });

  const userEnterValid = inputCustomer.yearInvestment >= 1;

  function callUserInput(inputIde, val) {
    setInputCustomer((prev) => ({
      ...prev,
      [inputIde]: +val
    }));
  }

  const handleGeneratePDF = () => {
    const results = calculateInvestmentResults({
      beginInvestment: inputCustomer.beginInvestment,
      annInvestment: inputCustomer.annualInvestment,
      returnInv: inputCustomer.returnInvestment,
      yearInv: inputCustomer.yearInvestment
    });

    generatepdf({
      begInvestment: inputCustomer.beginInvestment,
      annInvestment: inputCustomer.annualInvestment,
      returnInv: inputCustomer.returnInvestment,
      yearInv: inputCustomer.yearInvestment,
      results: results
    });
  };

  return (
    <div className="App">
      <Header />
      <Main inputCustomer={inputCustomer} onChangeCustInput={callUserInput} />
      
      {!userEnterValid && <p className="center">Please ensure that the years invested are greater than zero</p>}
      
      {userEnterValid && (
        <>
          <OutputData inputVal={inputCustomer} />
          <div className="center">
            <button className="button" onClick={handleGeneratePDF}>
              Download PDF Report
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App; // Added the missing export