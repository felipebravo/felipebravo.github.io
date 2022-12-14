import { StyledCv } from "./style";
import { GrReactjs } from "react-icons/gr";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiVercel,
  SiJest,
  SiPostgresql,
  SiNodedotjs,
} from "react-icons/si";
import { VscGithubInverted, VscTerminalBash } from "react-icons/vsc";

export const Cv = () => {
  return (
    <StyledCv>
      <div>
        <h1>Felipe Bravo - Desenvolvedor Front End</h1>
        <br />
        <p>Tenho 29 anos e sou de São Paulo, SP.</p>
        <p>
          Formado como <strong>Desenvolvedor Front End </strong>
          pela Kenzie Academy Brasil.
        </p>
        <p>
          Durante minha fomração aprendi desde semântica HTML até consumo de
          API's, Javascript Vanilla, React com Typescript, bibliotecas de
          componentes React UI, CSS puro e animações com Frame Motion.
        </p>
        <p>
          Também tive a oportunidade de realizar projetos em equipe, pondo em
          prática o versionamento de código através do GitHub.
        </p>
      </div>
      <div className="techs">
        <h2>Tecnologias:</h2>
        <div className="techs-info">
          <span>
            <GrReactjs />
            ReactJS
          </span>
          <span>
            <SiJavascript />
            JavaScript
          </span>
          <span>
            <SiCss3 />
            CSS3
          </span>
          <span>
            <SiHtml5 />
            HTML5
          </span>
          <span>
            <SiTypescript />
            TypeScript
          </span>
        </div>
      </div>
      <div className="techs">
        <h2>Ferramentas de desenvolvimento:</h2>
        <div className="techs-info">
          <span>
            <VscGithubInverted />
            GitHub
          </span>
          <span>
            <VscTerminalBash />
            GitBash
          </span>
          <span>
            <SiVercel />
            Vercel
          </span>
        </div>
      </div>
      <div className="techs">
        <h2>Tecnologias que estou estudando:</h2>
        <div className="techs-info">
          <span>
            <SiJest />
            Jest
          </span>
          <span>
            <SiPostgresql />
            PostgreSQL
          </span>
          <span>
            <SiNodedotjs />
            NodeJS
          </span>
        </div>
      </div>
    </StyledCv>
  );
};
