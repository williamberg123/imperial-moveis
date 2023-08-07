import { FC } from 'react';
import { ContactLink, Container, Title } from './styles';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const ContactLinks: FC = () => {
	const isLessThan700px = useMediaQuery('(max-width: 700px)');

	return (
		<Container>
			<Title>
				{
					!isLessThan700px
					? 'Solicite orçamento conosco:'
					: 'Contato:'
				}
			</Title>

			<ContactLink target="_blank" href="https://www.instagram.com/imperial_moveis_marco/">
				<FaInstagram />
			</ContactLink>

			<ContactLink target="_blank" href="https://api.whatsapp.com/send?phone=5588996784261&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20or%C3%A7amento!">
				<FaWhatsapp />
			</ContactLink>
		</Container>
	);
};
