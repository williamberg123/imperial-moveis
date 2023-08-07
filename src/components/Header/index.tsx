import { FC } from 'react';
import { Logo } from '../Logo';

import { Container } from './styles';
import { NavBar } from '../NavBar';
import { ContactLinks } from '../ContactLinks';

export const Header: FC = () => {
	return (
		<Container>
			<Logo />
			<NavBar />
			<ContactLinks />
		</Container>
	);
};
