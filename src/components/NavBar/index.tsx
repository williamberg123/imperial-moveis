import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoHomeFill } from 'react-icons/go';
import { GiSofa } from 'react-icons/gi';

import { changePage } from '../../store/page';
import { ReduxStateType } from '../../@types/redux';
export type PageOptions = 'home' | 'catalog' | 'info';

import { Container, Li, LinkNavigation, UlNavigation } from './styles';

export const NavBar: FC = () => {
	const dispatch = useDispatch();
	const page = useSelector((s: ReduxStateType) => s.page);

	const changePageFunc = (p: PageOptions) => {
		dispatch(changePage(p));
	};

	return (
		<Container>
			<UlNavigation>
				<Li>
					<LinkNavigation
						onClick={() => changePageFunc('home')}
						className={page === 'home' ? 'page' : ''}
						to="/"
					>
						<GoHomeFill />
					</LinkNavigation>
				</Li>

				<Li>
					<LinkNavigation
						onClick={() => changePageFunc('catalog')}
						className={page === 'catalog' ? 'page' : ''}
						to="/catalog"
					>
						<GiSofa />
					</LinkNavigation>
				</Li>
			</UlNavigation>
		</Container>
	);
};
