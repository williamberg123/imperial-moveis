import { FC } from 'react';
import { Container } from './styles';
import { Logo } from '../../../../components/Logo';
import { Profile } from '../Profile';
import { AdminNavBar } from '../NavBar';

export const AdminPageHeader: FC = () => {
	return (
		<Container>
			<Logo />
			<Profile />
			<AdminNavBar />
		</Container>
	);
};
