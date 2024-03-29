import styled from "styled-components";

export const StyledGif = styled.li`
  position: relative;

  width: 300px;
  height: 200px;

  border-radius: 8px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    border-radius: 8px;
  }

  &:hover {
    div {
      display: block;
    }
  }

  @media (max-width: 410px) {
    width: 200px;
    height: 100px;
  }

  @media (max-width: 290px) {
    width: 160px;
    height: 100px;
  }
`;

export const StyledDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: none;

  width: 100%;
  height: 100%;
  padding: 10px;

  overflow-y: auto;

  color: var(--grey-3);
  font-weight: 700;

  border-radius: 8px;

  background-color: var(--white-color);
  opacity: 0.85;
`;
