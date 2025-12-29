export function calculateInvestmentResults({
  beginInvestment,
  annInvestment,
  returnInv,
  yearInv
})
{
  
  const annualData = [];
  let investmentValue = beginInvestment;
  
  for (let i = 0; i < yearInv; i++) {
    const interestEarnedInYear = investmentValue * (returnInv / 100);
    investmentValue += interestEarnedInYear + annInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annInvestment: annInvestment
    });
  }
  
  return annualData;
}


