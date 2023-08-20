import { FC } from 'react';

import { AdminPageHeader } from '../components/Header';
import { PrivateRoute } from '../../../components/PrivateRoute';
import { useAdminContext } from '../../../hooks/useAdminContext';
import { Products } from '../components/Products';
import { NewProductModal } from '../components/NewProductModal';
import { Container } from './styles';

export const AdminPage: FC = () => {
	const { admin, adminPageLoadingOption, isOpenNewProductModal } = useAdminContext();

	return (
		<PrivateRoute isAuth={!!admin} pathToRedirect="/admin/login">
			<Container>
				<AdminPageHeader />

				{
					adminPageLoadingOption === 'products' && <Products />
				}

				{
					isOpenNewProductModal && <NewProductModal />
				}
			</Container>
		</PrivateRoute>
	);
};
