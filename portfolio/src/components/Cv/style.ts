import styled from "styled-components";

export const StyledCv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  svg {
    font-size: 40px;
  }

  .techs {
    min-width: 410px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .techs-info {
    display: flex;
    gap: 20px;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }

  @media (max-width: 590px) {
    div:first-child {
      p {
        display: none;
      }
    }
  }
`;
