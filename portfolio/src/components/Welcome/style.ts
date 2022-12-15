import styled from "styled-components";

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    max-width: fit-content;

    div:last-child {
      p {
        white-space: unset;
        animation: unset;
        width: fit-content;
        border-right: transparent;
      }
    }
  }
`;
