import styled from "styled-components";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;

  width: 60px;
  height: 100%;
  padding: 10px 0 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--grey-1);

  color: var(--grey-2);

  div {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    a {
      color: var(--grey-2);
    }

    svg {
      font-size: 32px;
      cursor: pointer;

      &:hover {
        color: var(--white-color);
      }

      &:focus {
        color: var(--white-color);
      }
    }
  }

  .message {
    background-color: var(--bg-dark-color);
    position: absolute;
    width: 240px;
    height: 20px;
    left: 30px;
    top: 140px;
    z-index: 10;
    padding: 0 10px;
    text-align: end;
    border-radius: 0 0 8px 8px;
    animation: showOption 1s ease;
    color: var(--white-color);

    ::after {
      content: "";
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      bottom: 10px;
      left: -1px;
      transform: skew(15deg, 45deg);
      background-color: var(--bg-dark-color);
    }
  }
`;
