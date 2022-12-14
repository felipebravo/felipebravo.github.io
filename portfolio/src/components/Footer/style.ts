import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 0px;

  width: 100vw;
  height: 40px;
  padding: 0 20px 0 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-dark-color);

  color: var(--white-color);

  div {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 1050px) {
    div:last-child {
      span:first-child {
        display: none;
      }
    }
  }

  @media (max-width: 960px) {
    div:last-child {
      span:nth-child(2) {
        display: none;
      }
    }
  }

  @media (max-width: 870px) {
    div:last-child {
      span:nth-child(3) {
        display: none;
      }
    }
  }

  @media (max-width: 810px) {
    div:last-child {
      span {
        display: none;
      }
    }
  }

  @media (max-width: 490px) {
    width: 105%;

    div:last-child {
      svg {
        display: none;
      }
    }
  }

  @media (max-width: 410px) {
    div:first-child {
      span {
        display: none;
      }
    }
  }
`;
