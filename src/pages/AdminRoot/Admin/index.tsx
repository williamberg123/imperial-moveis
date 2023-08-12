import { FC } from 'react';
import { Container } from './styles';
import { AdminPageHeader } from '../components/Header';
import { PrivateRoute } from '../../../components/PrivateRoute';
import { usePageContext } from '../../../hooks/usePageContext';

export const AdminPage: FC = () => {
	const { admin } = usePageContext();

	return (
		<PrivateRoute isAuth={!!admin} pathToRedirect="/admin/login">
			<Container>
				<AdminPageHeader />
			</Container>
		</PrivateRoute>
	);
};
