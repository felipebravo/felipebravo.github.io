import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Cv } from "../Cv";
import { Portfolio } from "../Portfolio";
import { Welcome } from "../Welcome";
import { StyledMain } from "./style";

export const Main = () => {
  const { whichPage } = useContext(MainContext);

  return (
    <StyledMain>
      {whichPage === "perfil" ? (
        <Cv />
      ) : whichPage === "portfolio" ? (
        <Portfolio />
      ) : (
        <Welcome />
      )}
    </StyledMain>
  );
};
