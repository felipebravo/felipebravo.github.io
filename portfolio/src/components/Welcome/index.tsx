import { StyledWelcome } from "./style";

export const Welcome = () => {
  return (
    <StyledWelcome>
      <div>
        <h3>{`<h1>`}</h3>
        <h1>{`Olá, seja bem-vindo ao meu portfólio!`}</h1>
        <h3>{`</h1>`} </h3>
      </div>
      <div>
        <p>{`<p>lorem ip.. brincadeira! No menu ao lado você pode encontrar alguns projetos, meu LinkedIn e um pouco sobre minha trajetória.`}</p>
      </div>
    </StyledWelcome>
  );
};
