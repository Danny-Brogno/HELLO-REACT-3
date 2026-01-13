import { calculateInvestmentResults, formatter } from '../util/investment.js';

export function OutputData({inputVal}) {
  // Explicitly map your state keys to the function's expected keys
  const resdata = calculateInvestmentResults({
    beginInvestment: inputVal.beginInvestment,
    annInvestment: inputVal.annualInvestment, // Mapping annualInvestment to annInvestment
    returnInv: inputVal.returnInvestment,     // Mapping returnInvestment to returnInv
    yearInv: inputVal.yearInvestment          // Mapping yearInvestment to yearInv
  });
  
  const initialInvestment = resdata[0].valueEndOfYear - resdata[0].interest - resdata[0].annInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>YEAR</th>
          <th>INVESTMENT VALUE</th>
          <th>INTEREST (YEAR)</th>
          <th>ANNUAL INVESTMENT</th>
          <th>TOTAL INTEREST</th>
          <th>TOTAL AMOUNT INVESTED</th>
        </tr>
      </thead>
      <tbody>
        {
          resdata.map((yearData) => { 
          // VARIABLES HERE
          const totalInterest = yearData.valueEndOfYear - yearData.annInvestment * yearData.year - initialInvestment;
          const totalAmountInv = yearData.valueEndOfYear - totalInterest;
            return (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear.toFixed(2))}</td>
                  <td>{formatter.format(yearData.interest.toFixed(2))}</td>
                  <td>{formatter.format(yearData.annInvestment)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInv)}</td>
                </tr>
            );
          })
        } 
      </tbody>
    </table>
  );
}