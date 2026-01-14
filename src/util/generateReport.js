import jsPDF from 'jspdf';
import { formatter } from './investment.js';

export function generatepdf(data) {
  const doc = new jsPDF();
  const initialInvestment = data.results[0].valueEndOfYear - data.results[0].interest - data.results[0].annInvestment;

  doc.setFontSize(20);
  doc.text('Investment Report', 10, 20);

  doc.setFontSize(10);
  doc.text(`Beginning Investment: ${formatter.format(data.begInvestment)}`, 10, 40);
  doc.text(`Annual Investment: ${formatter.format(data.annInvestment)}`, 10, 48);
  doc.text(`Expected Return: ${data.returnInv}%`, 10, 56);

  // Table Headers
  let yOffset = 75;
  doc.setFont(undefined, 'bold');
  doc.text('Year', 10, yOffset);
  doc.text('Total Value', 30, yOffset);
  doc.text('Total Interest', 70, yOffset);
  doc.text('Total Invested', 110, yOffset);
  doc.setFont(undefined, 'normal');

  yOffset += 10;
  const pageHeight = doc.internal.pageSize.height;

  data.results.forEach((yearData) => {
    if (yOffset > pageHeight - 20) {
      doc.addPage();
      yOffset = 20;
    }

    // Logic to match your OutputData.jsx calculations
    const totalInterest = yearData.valueEndOfYear - (yearData.annInvestment * yearData.year) - initialInvestment;
    const totalAmountInv = yearData.valueEndOfYear - totalInterest;

    doc.text(yearData.year.toString(), 10, yOffset);
    doc.text(formatter.format(yearData.valueEndOfYear), 30, yOffset);
    doc.text(formatter.format(totalInterest), 70, yOffset);
    doc.text(formatter.format(totalAmountInv), 110, yOffset);
    
    yOffset += 8;
  });

  doc.save('investment-report.pdf');
}