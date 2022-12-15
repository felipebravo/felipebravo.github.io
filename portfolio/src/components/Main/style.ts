import styled from "styled-components";

export const StyledMain = styled.main`
  width: 98%;
  height: 100%;

  padding: 10px 0 10px 0;
  margin-left: 70px;

  color: var(--white-color);

  @media (max-width: 490px) {
    width: 70%;
    height: 98%;
  }
`;
