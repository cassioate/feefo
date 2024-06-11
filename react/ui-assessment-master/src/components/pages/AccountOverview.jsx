import React from "react";
import {
  StyledAccountOverviewTitle,
  StyledContainer,
  StyledInfosContainer,
} from "./AccountOverview.js";
import MailInfos from "../templates/MailInfos/MailInfos.jsx";
import Dashboard from "../templates/Dashboard/Dashboard.jsx";

const AccountOverview = ({ data }) => {
  return (
    <StyledContainer>
      <StyledInfosContainer>
        <StyledAccountOverviewTitle>
          Account Overview
        </StyledAccountOverviewTitle>
        <MailInfos supportContact={data.supportContact} />
      </StyledInfosContainer>
      <Dashboard salesOverview={data.salesOverview} />
    </StyledContainer>
  );
};

export default AccountOverview;
