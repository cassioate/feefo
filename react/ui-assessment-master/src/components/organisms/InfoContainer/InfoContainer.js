import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
