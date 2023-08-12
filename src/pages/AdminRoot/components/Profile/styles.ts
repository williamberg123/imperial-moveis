import styled from 'styled-components';

export const Container = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}) => theme.colors.yellow};
	font-weight: bold;
`;
