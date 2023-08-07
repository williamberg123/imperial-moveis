import { FC } from 'react';
import { Container, FooterLink, FooterLinksContainer, FooterLinksContainerSpan, FooterSpan } from './styles';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Footer: FC = () => {
	return (
		<Container>
			<FooterSpan>
				Developed By <a target="_blank" href="https://www.linkedin.com/in/william-diogo/">William Diogo</a>
			</FooterSpan>

			<FooterLinksContainer>
				<FooterLinksContainerSpan>Contate-me:</FooterLinksContainerSpan>

				<FooterLink href="https://www.instagram.com/wi_diogo/" target="_blank">
					<FiInstagram />
				</FooterLink>

				<FooterLink href="https://api.whatsapp.com/send?phone=5588996936429&text=Ol%C3%A1,%20William!" target="_blank">
					<FaWhatsapp />
				</FooterLink>

				<FooterLink href="https://www.linkedin.com/in/william-diogo/" target="_blank">
					<FaLinkedin />
				</FooterLink>
			</FooterLinksContainer>
		</Container>
	);
};
