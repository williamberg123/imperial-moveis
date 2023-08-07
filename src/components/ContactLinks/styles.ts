import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.span`
	font-weight: bold;
	margin-right: 10px;
`;

export const ContactLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${({theme}) => theme.colors.mediumGray};
	color: ${({theme}) => theme.colors.white};
	margin: 0 10px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		color: ${({theme}) => theme.colors.yellow};
	}
`;
