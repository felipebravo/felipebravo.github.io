import { useContext, useEffect, useRef } from 'react';
import { MainContext } from '../../contexts/MainContext';
import { StyledContent, StyledModal, StyledOverlay } from './style';

export const Modal = () => {
	const { setIsModalOpen, isModalOpen } = useContext(MainContext);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutclick = (evt: MouseEvent) => {
			const target = evt.target as HTMLDivElement;
			!contentRef.current?.contains(target) &&
				setIsModalOpen(!isModalOpen);
		};

		document.addEventListener('mousedown', handleOutclick);

		return () => {
			document.removeEventListener('mousedown', handleOutclick);
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
							src="https://media.licdn.com/dms/image/D4D03AQG9N4lid8xV3Q/profile-displayphoto-shrink_800_800/0/1683051501234?e=1688601600&v=beta&t=RTvDS2xGdyNi7yvCpIzMZbu52uNNzYUwHMh6z15CBq4"
							alt="perfil"
						/>
						<h3>Felipe Bravo</h3>
						<p>
							Desenvolvedor Full Stack em formação na Kenzie
							Academy Brasil | Front-end | ReactJS | HTML |
							JavaScript | CSS
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
