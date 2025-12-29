import { calculateInvestmentResults } from '../util/investment.js';

export function OutputData({inputValue}) {
  console.log(inputValue);

  const resdata = calculateInvestmentResults({
    beginInvestment: inputValue.beginInvestment,
    annInvestment: inputValue.annualInvestment,
    returnInv: inputValue.returnInvestment,
    yearInv: inputValue.yearInvestment
  });

  return <p>RESULTS</p>;
}