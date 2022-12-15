import { useContext, useEffect, useRef } from "react";
import { MainContext } from "../../contexts/MainContext";
import { StyledContent, StyledModal, StyledOverlay } from "./style";

export const Modal = () => {
  const { setIsModalOpen, isModalOpen } = useContext(MainContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutclick = (evt: MouseEvent) => {
      const target = evt.target as HTMLDivElement;
      !contentRef.current?.contains(target) && setIsModalOpen(!isModalOpen);
    };

    document.addEventListener("mousedown", handleOutclick);

    return () => {
      document.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return (
    <StyledModal>
      <StyledOverlay>
        <StyledContent ref={contentRef}>
          <header>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
              alt="linkedin"
            />
          </header>
          <div>
            <img
              src="https://media.licdn.com/dms/image/C5603AQFfhhu0yfkmQA/profile-displayphoto-shrink_800_800/0/1517250109196?e=1676505600&v=beta&t=F0erHOBeSRfwWRlTi6SS9eEmg-I51frFCGk8p_n63nM"
              alt="perfil"
            />
            <h3>Felipe Bravo</h3>
            <p>
              Desenvolvedor Full Stack em formação na Kenzie Academy Brasil |
              Front-end | ReactJS | HTML | JavaScript | CSS
            </p>
            <a
              href="https://www.linkedin.com/in/feebravo/"
              target="_blank"
              rel="noreferrer"
            >
              Ver perfil
            </a>
          </div>
        </StyledContent>
      </StyledOverlay>
    </StyledModal>
  );
};
