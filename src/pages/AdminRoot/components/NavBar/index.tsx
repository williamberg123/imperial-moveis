import { FC } from 'react';

import { useAdminContext } from '../../../../hooks/useAdminContext';
import { Container, Li, LinkNavigation, UlNavigation } from './styles';

export const AdminNavBar: FC = () => {
	const { adminPageLoadingOption, changeAdminPageLoadingOption } = useAdminContext();

	return (
		<Container>
			<UlNavigation>
				<Li>
					<LinkNavigation
						onClick={() => changeAdminPageLoadingOption('home')}
						className={adminPageLoadingOption === 'home' ? 'admin-page' : ''}
						to="#">
						Home
					</LinkNavigation>
				</Li>

				<Li>
					<LinkNavigation
						onClick={() => changeAdminPageLoadingOption('products')}
						className={adminPageLoadingOption === 'products' ? 'admin-page' : ''}
						to="#">
						Produtos
					</LinkNavigation>
				</Li>
			</UlNavigation>
		</Container>
	);
};
