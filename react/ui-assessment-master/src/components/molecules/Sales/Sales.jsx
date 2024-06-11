import React from "react";
import { StyledSales, StyledSalesText, StyledSalesTitle } from "./Sales.js";
import ArrowUploadIcon from "../../atoms/ArrowUploadIcon/ArrowUploadIcon.jsx";
import SalesInfo from "../../atoms/SalesInfos/SalesInfo.jsx";

const Sales = ({ uploads, linesSaved }) => {
  return (
    <StyledSales>
      <StyledSalesTitle>
        <ArrowUploadIcon />
        <StyledSalesText>Sales</StyledSalesText>
      </StyledSalesTitle>
      <SalesInfo uploads={uploads} linesSaved={linesSaved} />
    </StyledSales>
  );
};

export default Sales;
