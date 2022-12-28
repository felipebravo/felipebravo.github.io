import { useContext, useEffect, useRef, useState } from "react";
import { StyledNav } from "./style";
import {
  VscAccount,
  VscGithubAlt,
  VscFiles,
  VscDebugAlt,
  VscSearch,
  VscMenu,
} from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { MainContext } from "../../contexts/MainContext";

export const Nav = () => {
  const { setWhichPage, setIsModalOpen, isModalOpen } = useContext(MainContext);
  const [searchMessage, setSearchMessage] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutclick = (evt: MouseEvent) => {
      const target = evt.target as HTMLDivElement;
      !contentRef.current?.contains(target) && setSearchMessage(false);
    };

    document.addEventListener("mousedown", handleOutclick);

    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <StyledNav>
      <div>
        <VscMenu type="button" onClick={() => setWhichPage("")} />
        <VscFiles type="button" onClick={() => setWhichPage("portfolio")} />
        <VscSearch type="button" onClick={() => setSearchMessage(true)} />
        {searchMessage && (
          <p className="message" ref={contentRef}>
            Opa esse não funciona {`:(`}
          </p>
        )}
        <VscDebugAlt />
      </div>
      <div>
        <VscAccount type="button" onClick={() => setWhichPage("perfil")} />
        <SlSocialLinkedin
          type="button"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
        <a
          href="https://github.com/felipebravo"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithubAlt />
        </a>
      </div>
    </StyledNav>
  );
};
