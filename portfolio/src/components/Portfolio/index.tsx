import { StyledPortfolio } from "./style";
import RickAndMortyGif from "../../assets/RickAndMorty.gif";
import { StyledDescription, StyledGif } from "../Gifs/style";

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <StyledGif>
        <a
          href="https://rick-and-morty-project-d2an2msj9-felipebravo.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={RickAndMortyGif} alt="RickAndMortyGif" />
          <StyledDescription>
            <p>Aplicação feita em React com Typescript e Styled Components.</p>
            <p>Informações sendo consumidas da API do Rick And Morty.</p>
            <p>
              Permite verificar todos os personagens e localizações, podendo
              filtrar os residentes de cada localização e realizar busca por
              personagem.
            </p>
          </StyledDescription>
        </a>
      </StyledGif>
    </StyledPortfolio>
  );
};
