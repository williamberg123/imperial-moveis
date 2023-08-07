import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 10px;
	left: calc(50% - 100px);
	padding: 2px;
	background-color: ${({theme}) => theme.colors.darkGray};
	border-radius: 50px;
	z-index: 10;
`;

export const UlNavigation = styled.ul`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style: none;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 50px;
	padding: 0 20px;
`;

export const Li = styled.li``;

export const LinkNavigation = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.gray};
	margin: 15px 0;
	color: ${({ theme }) => theme.colors.lightGray};
	font-weight: bold;

	&:not(.page):hover {
		color: ${({theme}) => theme.colors.white};
		background-color: ${({theme}) => theme.colors.lightGray};
	}

	&.page {
		background-color: ${({ theme }) => theme.colors.yellow};
		color: ${({ theme }) => theme.colors.white};
	}
`;
