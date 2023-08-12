import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.darkGray};
	padding: 10px 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
	position: relative;
`;
