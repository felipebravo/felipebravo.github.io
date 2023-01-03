import styled from "styled-components";

export const StyledPortfolio = styled.ul`
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

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
