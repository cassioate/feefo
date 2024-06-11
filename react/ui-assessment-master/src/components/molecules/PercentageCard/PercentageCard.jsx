import React from "react";
import {
  StyledPercentageCard,
  StyledPercentageCardText,
} from "./PercentageCard.js";
import Percentage from "../../atoms/Percentage/Percentage.jsx";

const PercentageCard = ({
  firstValue,
  secondValue,
  message,
  isBorderLeft,
  isBorderRight,
}) => {
  return (
    <StyledPercentageCard
      isBorderLeft={isBorderLeft}
      isBorderRight={isBorderRight}
    >
      <Percentage firstValue={firstValue} secondValue={secondValue} />
      <StyledPercentageCardText>{message}</StyledPercentageCardText>
    </StyledPercentageCard>
  );
};

export default PercentageCard;
