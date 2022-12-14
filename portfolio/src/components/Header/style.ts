import styled from "styled-components";

export const StyledHeader = styled.header`
  max-width: 100vw;
  height: 40px;
  padding: 0 0 0 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-dark-color);

  img {
    height: 80%;
  }

  span {
    color: var(--white-color);
  }

  div {
    width: 150px;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button:last-child {
      &:hover {
        background-color: var(--primary-red);
      }
    }

    button {
      height: 100%;
      width: 33%;

      background-color: var(--bg-dark-color);
      color: var(--white-color);

      &:hover {
        background-color: var(--primary-grey);
        transition: 0.8s;
      }
    }
  }

  @media (max-width: 490px) {
    width: 120%;
    max-width: none;

    button {
      display: none;
    }

    span {
      display: none;
    }
  }
`;
