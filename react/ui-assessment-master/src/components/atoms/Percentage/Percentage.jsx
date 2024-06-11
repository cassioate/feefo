import React from "react";
import { StyledPercentage } from "./Percentage.js";

const Percentage = ({ firstValue, secondValue }) => {
  const percentageCalculator = (firstValue, secondValue) => {
    return (firstValue / secondValue) * 100;
  };

  return (
    <StyledPercentage>
      {percentageCalculator(firstValue, secondValue)}%
    </StyledPercentage>
  );
};

export default Percentage;
