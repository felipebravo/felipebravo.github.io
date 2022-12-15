import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100vh;

  z-index: 101;

  backdrop-filter: blur(3px);
`;

export const StyledOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  background-color: var(--bg-primary-color-op);
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  width: 370px;
  min-height: 250px;

  border-radius: 8px;

  background-color: var(--grey-3);
  border: 1px solid var(--grey-3);

  header {
    position: relative;

    width: 100%;
    height: 60px;
    padding: 10px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    background-color: var(--white-color);

    img {
      position: absolute;
      top: -20px;
      height: 100px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 10px;

    img {
      width: 80px;

      border-radius: 50%;
    }

    a {
      cursor: pointer;
      border-radius: 20px;
      text-decoration: none;
      color: var(--white-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
