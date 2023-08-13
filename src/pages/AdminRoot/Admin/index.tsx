import { FC } from 'react';
import { Container } from './styles';
import { AdminPageHeader } from '../components/Header';
import { PrivateRoute } from '../../../components/PrivateRoute';
import { usePageContext } from '../../../hooks/usePageContext';
import { Products } from '../components/Products';

export const AdminPage: FC = () => {
	const { admin, adminPageLoadingOption } = usePageContext();

	return (
		<PrivateRoute isAuth={!!admin} pathToRedirect="/admin/login">
			<Container>
				<AdminPageHeader />
				
				{
					adminPageLoadingOption === 'products' && <Products />
				}
			</Container>
		</PrivateRoute>
	);
};
