import React from "react";
import { StyledContainer } from "./Dashboard.js";
import PercentageCardsContainer from "../../organisms/PercentageCardsContainer/PercentageCardsContainer.jsx";
import PercentageCard from "../../molecules/PercentageCard/PercentageCard.jsx";
import Sales from "../../molecules/Sales/Sales.jsx";

export const Dashboard = ({ salesOverview }) => {
  const { successfulUploads, uploads, linesAttempted, linesSaved } =
    salesOverview;

  return (
    <StyledContainer>
      <Sales uploads={uploads} linesSaved={linesSaved} />
      <PercentageCardsContainer>
        <PercentageCard
          firstValue={successfulUploads}
          secondValue={uploads}
          message={"UPLOAD SUCCESS"}
          isBorderRight={true}
        />
        <PercentageCard
          firstValue={linesSaved}
          secondValue={linesAttempted}
          message={"LINES SAVED"}
        />
      </PercentageCardsContainer>
    </StyledContainer>
  );
};

export default Dashboard;
