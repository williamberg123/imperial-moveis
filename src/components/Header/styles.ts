import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	width: 100%;
	height: 80px;
	top: 0;
	background-color: ${({ theme }) => theme.colors.darkGray};
	border-bottom: 2px solid ${({theme}) => theme.colors.mediumGray};
`;
