import { Player } from "@lottiefiles/react-lottie-player";
import { StyledPortfolio } from "./style";

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Player
        autoplay={true}
        loop={true}
        controls={false}
        src="https://assets7.lottiefiles.com/packages/lf20_fbry1ksx.json"
        className="animation"
      ></Player>
      <div className="container">
        <h1 className="typewriter">{`<h1>Portfólio em construção</h1>`}</h1>
      </div>
    </StyledPortfolio>
  );
};
