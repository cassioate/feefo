import styled from "styled-components";

export const StyledSales = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledSalesTitle = styled.span`
  display: flex;
  flex-direction: row;
`;

export const StyledSalesText = styled.span`
  padding-left: 10px;
  font-weight: bold;
`;
