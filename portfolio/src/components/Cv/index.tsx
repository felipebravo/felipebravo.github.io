import { StyledCv } from './style';
import { GrReactjs } from 'react-icons/gr';
import {
	SiJavascript,
	SiCss3,
	SiHtml5,
	SiTypescript,
	SiVercel,
	SiJest,
	SiPostgresql,
	SiNodedotjs,
	SiRedux,
	SiFigma,
	SiNotion,
	SiTrello,
	SiJirasoftware,
	SiMysql,
	SiPrisma,
	SiNestjs,
	SiPython,
	SiDjango,
	SiInsomnia,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { VscGithubInverted, VscTerminalBash } from 'react-icons/vsc';

export const Cv = () => {
	return (
		<StyledCv>
			<div className="divProfileDesc">
				<h1>
					export const <span>DevFrontEnd</span> = {`() => {`}
				</h1>
				<span>return {`(`}</span>
				<p>
					Meu nome é Felipe Bravo, tenho 29 anos e sou de São Paulo,
					SP.
				</p>
				<p>
					Formado como <strong>Desenvolvedor Front End </strong>
					pela Kenzie Academy Brasil.
				</p>
				<p>
					Durante minha formação aprendi desde semântica HTML até
					consumo de API's, metodologia SCRUM, Javascript Vanilla,
					React com Typescript, bibliotecas de componentes React UI,
					CSS puro e animações com Frame Motion.
				</p>
				<p>
					Também tive a oportunidade de realizar projetos em equipe,
					pondo em prática o versionamento de código através do
					GitHub.
				</p>
				<span>{`)`}</span>
				<span>{`}`}</span>
			</div>
			<h1 className="title-mobile">Desenvolvedor Frontend</h1>
			<div className="divTechnologies">
				<div className="techs">
					<h2>Tecnologias:</h2>
					<ul className="techs-info">
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
						<span>
							<SiRedux />
							Redux
						</span>
						<span>
							<SiPython />
							Python
						</span>
						<span>
							<SiDjango />
							Django
						</span>
					</ul>
				</div>
				<div className="techs">
					<h2>Ferramentas de desenvolvimento:</h2>
					<ul className="techs-info">
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
						<span>
							<SiFigma />
							Figma
						</span>
						<span>
							<SiNotion />
							Notion
						</span>
						<span>
							<SiTrello />
							Trello
						</span>
						<span>
							<SiJirasoftware />
							Jira
						</span>
						<span>
							<SiInsomnia />
							Insomnia
						</span>
					</ul>
				</div>
				<div className="techs">
					<h2>Tecnologias que estou estudando:</h2>
					<ul className="techs-info">
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
						<span>
							<SiMysql />
							MySQL
						</span>
						<span>
							<SiPrisma />
							PrismaORM
						</span>
						<span>
							<SiNestjs />
							NestJS
						</span>
						<span>
							<TbBrandNextjs />
							NextJS
						</span>
					</ul>
				</div>
			</div>
		</StyledCv>
	);
};
