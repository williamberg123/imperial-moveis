import { FC } from 'react';
import { Container, Li, LinkNavigation, UlNavigation } from './styles';
import { usePageContext } from '../../../../hooks/usePageContext';

export const AdminNavBar: FC = () => {
	const { adminPageLoadingOption, changeAdminPageLoadingOption } = usePageContext();

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
