import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { Cv } from "../Cv";
import { Modal } from "../Modal";
import { Portfolio } from "../Portfolio";
import { Welcome } from "../Welcome";
import { StyledMain } from "./style";

export const Main = () => {
  const { whichPage, isModalOpen } = useContext(MainContext);

  return (
    <StyledMain>
      {whichPage === "perfil" ? (
        <Cv />
      ) : whichPage === "portfolio" ? (
        <Portfolio />
      ) : (
        <Welcome />
      )}
      {isModalOpen && <Modal />}
    </StyledMain>
  );
};
