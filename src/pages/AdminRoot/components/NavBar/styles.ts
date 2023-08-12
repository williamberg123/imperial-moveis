import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
	position: absolute;
	bottom: -60px;
	left: calc(50% - 200px);
`;

export const UlNavigation = styled.ul`
	width: 400px;
	border-radius: 50px;
	display: flex;
	align-items: center;
	list-style: none;
	border: 1px solid ${({theme}) => theme.colors.mediumGray};
`;

export const Li = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
`;

export const LinkNavigation = styled(Link)`
	width: 100%;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	color: ${({theme}) => theme.colors.white};
	border-radius: 50px;
	font-weight: bold;
	text-transform: lowercase;
	font-variant: small-caps;

	&.admin-page {
		background-color: ${({theme}) => theme.colors.mediumGray};
		color: ${({theme}) => theme.colors.yellow};
	}

	&:hover {
		background-color: ${({theme}) => theme.colors.mediumGray};
	}
`;
