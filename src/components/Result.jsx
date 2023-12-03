import React from "react";
import { calculateInvestmentResults,formatter } from "../util/investment";
const Result = ({ Userinput }) => {
  const results = calculateInvestmentResults(Userinput);
  const intialInvestment = results[0].valueEndOfYear-results[0].interest-results[0].annualInvestment;
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Year</th>
          <th>Total interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yeardata) => {
          
          const totalintreset = yeardata.valueEndOfYear-yeardata.annualInvestment*yeardata.year-intialInvestment;
          const totalAmountIntreset = yeardata.valueEndOfYear-intialInvestment
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalintreset)}</td>
              <td>{formatter.format(totalAmountIntreset)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
