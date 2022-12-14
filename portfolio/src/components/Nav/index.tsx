import { useContext } from "react";
import { StyledNav } from "./style";
import {
  VscAccount,
  VscFiles,
  VscDebugAlt,
  VscSearch,
  VscMenu,
} from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { MainContext } from "../../contexts/MainContext";

export const Nav = () => {
  const { setWhichPage } = useContext(MainContext);

  return (
    <StyledNav>
      <div>
        <VscMenu type="button" onClick={() => setWhichPage("")} />
        <VscFiles type="button" onClick={() => setWhichPage("portfolio")} />
        <VscSearch />
        <VscDebugAlt />
      </div>
      <div>
        <VscAccount type="button" onClick={() => setWhichPage("perfil")} />
        <SlSocialLinkedin />
      </div>
    </StyledNav>
  );
};
