import React, {useState} from 'react';

export const Main = ({inputCustomer, onChangeCustInput}) => {
  
  return (
    <main>
      <section id="user-input">
        <div className="input-group">
        
          <p>
            <label>Beginning investment</label>
            <input type="number" value={inputCustomer.beginInvestment} required onChange={(e)=>onChangeCustInput('beginInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Annual investment</label>
            <input type="number" value={inputCustomer.annualInvestment} required onChange={(e)=>onChangeCustInput('annualInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Return we expect</label>
            <input type="number" value={inputCustomer.returnInvestment} required onChange={(e)=>onChangeCustInput('returnInvestment', e.target.value)}/>
          </p>
          
          <p>
            <label>Yearly investment</label>
            <input type="number" value={inputCustomer.yearInvestment} required onChange={(e)=>onChangeCustInput('yearInvestment', e.target.value)}/>
          </p>
          
        </div>
      </section>
</main>
  )
}