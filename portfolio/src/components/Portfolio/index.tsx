import { StyledPageTitle, StyledPortfolio, StyledPortfolioUl } from './style';
import { StyledDescription, StyledGif } from '../Gifs/style';
import RickAndMortyGif from '../../assets/RickAndMorty.gif';
import AppBankGif from '../../assets/bank-app.gif';
import TechHubGif from '../../assets/tech-hub.gif';
import LoginRegisterGif from '../../assets/login-register.gif';

export const Portfolio = () => {
	return (
		<>
			<div>
				<h3>{`<h1>`}</h3>
				<StyledPageTitle>{`Projetos`}</StyledPageTitle>
				<h3>{`</h1>`} </h3>
			</div>
			<StyledPortfolio>
				<h3>{`<ul>`}</h3>
				<StyledPortfolioUl>
					<StyledGif>
						<a
							href="https://rick-and-morty-project-two.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={RickAndMortyGif} alt="RickAndMortyGif" />
							<StyledDescription>
								<p>
									Aplicação feita em React com Typescript e
									Styled Components.
								</p>
								<p>
									Informações sendo consumidas da API do Rick
									And Morty.
								</p>
								<p>
									Permite verificar todos os personagens e
									localizações, podendo filtrar os residentes
									de cada localização e realizar busca por
									personagem.
								</p>
							</StyledDescription>
						</a>
					</StyledGif>
					<StyledGif>
						<a
							href="https://bank-application.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={AppBankGif} alt="AppBankGif" />
							<StyledDescription>
								<p>Aplicação feita em React com Javascript.</p>
								<p>
									Ferramenta para adicionar e/ou excluir
									transações para controle de gastos. É
									possível filtrar por despesas ou ganhos,
									além de fazer o cálculo de saldo.
								</p>
							</StyledDescription>
						</a>
					</StyledGif>
					<StyledGif>
						<a
							href="https://tech-hub-lac.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={TechHubGif} alt="TechHubGif" />
							<StyledDescription>
								<p>Aplicação feita em React com Typescript.</p>
								<p>
									Ferramenta para adicionar, editar e excluir
									tecnologias, criando assim um hub de
									tecnologias. Ideal para controlar os
									conhecimentos adquiridos e respectivos
									níveis.
								</p>
								<p>(Em construção!!!)</p>
							</StyledDescription>
						</a>
					</StyledGif>
					<StyledGif>
						<a
							href="https://login-register-mocha-rho.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src={LoginRegisterGif}
								alt="LoginRegisterGif"
							/>
							<StyledDescription>
								<p>
									Aplicação feita em React com Javascript e
									Styled Components.
								</p>
								<p>
									Página de login, registro e dashboard
									simples. As tecnologias usadas foram, React
									Router DOM, Hook Form, React Icons, Yup para
									validações e key frame para as animações.
								</p>
							</StyledDescription>
						</a>
					</StyledGif>
				</StyledPortfolioUl>
				<h3>{`</ul>`}</h3>
			</StyledPortfolio>
		</>
	);
};
