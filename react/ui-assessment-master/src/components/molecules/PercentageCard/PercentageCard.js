import styled from "styled-components";

export const StyledPercentageCard = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: ${({ isBorderRight }) =>
    isBorderRight ? "1px solid #ccc;" : "none"};
  border-left: ${({ isBorderLeft }) =>
    isBorderLeft ? "1px solid #ccc;" : "none"};
`;

export const StyledPercentageCardText = styled.div`
  margin-top: 2px;
  color: rgb(152, 152, 152);
  font-weight: bold;
`;
