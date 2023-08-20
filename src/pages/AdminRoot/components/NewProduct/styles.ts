import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 250px;
	height: 350px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 10px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		border: 2px solid ${({theme}) => theme.colors.yellow};

		span {
			color: ${({ theme }) => theme.colors.yellow};
		}
	}

	@media (max-width: 600px) {
		width: 200px;
		height: 300px;
	}
`;

export const Span = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.lightGray};

	& > svg {
		width: 50px;
		height: 50px;
	}
`;
