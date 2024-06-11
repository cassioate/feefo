import React from "react";
import { StyledSalesInfo, StyledBoldText } from "./SalesInfo.js";

const SalesInfo = ({ uploads, linesSaved }) => {
  return (
    <StyledSalesInfo>
      You had <StyledBoldText>{uploads} uploads</StyledBoldText> and{" "}
      <StyledBoldText>{linesSaved}</StyledBoldText> lines added
    </StyledSalesInfo>
  );
};

export default SalesInfo;
