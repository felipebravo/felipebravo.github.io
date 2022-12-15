import styled from "styled-components";

export const StyledCv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  svg {
    font-size: 40px;
    cursor: pointer;

    &:hover {
      scale: 1.2;
    }
  }

  .title-mobile {
    display: none;
  }

  div:first-child {
    max-width: 680px;

    h1 {
      color: var(--red-1);
    }

    span {
      color: var(--primary-green);
    }

    span:nth-of-type(3) {
      color: var(--red-1);
    }

    p {
      color: var(--primary-blue);
      margin-left: 30px;
    }

    @media (max-width: 690px) {
      width: 380px;
    }
  }

  .techs {
    max-width: 600px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .techs-info {
    max-width: 100%;
    height: 70px;

    padding-top: 10px;

    display: flex;
    gap: 20px;

    overflow-x: auto;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
  }

  @media (max-width: 760px) {
    div:first-child {
      p {
        display: none;
      }
    }
  }

  @media (max-width: 530px) {
    .techs-info {
      width: 300px;

      padding: 10px;

      overflow-x: auto;
    }
  }

  @media (max-width: 490px) {
    div:first-child {
      display: none;
    }

    .title-mobile {
      display: unset;
      color: var(--primary-green);
    }
  }
`;
