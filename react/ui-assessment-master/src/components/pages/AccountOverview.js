import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;

  @media (max-width: 649px) {
    align-items: center;
  }

  @media (min-width: 650px) {
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
  }
`;

export const StyledInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  align-items: flex-start;

  @media (min-width: 650px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding-bottom: 40px;
  }
`;

export const StyledAccountOverviewTitle = styled.div`
  padding-bottom: 15px;
  font-size: 25px;
  white-space: nowrap;
  color: rgb(72, 68, 70);

  @media (min-width: 650px) {
    padding-right: 50px;
    font-size: 25px;
    white-space: nowrap;
    color: rgb(72, 68, 70);
  }
`;
