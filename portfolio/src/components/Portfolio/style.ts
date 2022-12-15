import styled from "styled-components";

export const StyledPortfolio = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }

  .animation {
    width: 90%;
    height: 500px;
  }

  @media (max-width: 670px) {
    .animation {
      height: 300px;
    }

    h1 {
      white-space: unset;
      animation: unset;
      border-right: transparent;
      width: fit-content;
    }
  }
`;
