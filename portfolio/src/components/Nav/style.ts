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
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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
`;
