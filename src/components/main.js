import React, {useState} from 'react';

export const Main = () => {
  
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
  
  return (
    <main>
      <section id="user-input">
        <div className="input-group">
        
          <p>
            <label>Beginning investment</label>
            <input type="number" value={inputCustomer.beginInvestment} required onChange={(e)=>callUserInput('beginInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Annual investment</label>
            <input type="number" value={inputCustomer.annualInvestment} required onChange={(e)=>callUserInput('annualInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Return we expect</label>
            <input type="number" value={inputCustomer.returnInvestment} required onChange={(e)=>callUserInput('returnInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Yearly investment</label>
            <input type="number" value={inputCustomer.yearInvestment} required onChange={(e)=>callUserInput('yearInvestment', e.target.value)}/>
          </p>
          
        </div>
      </section>
</main>
  )
}