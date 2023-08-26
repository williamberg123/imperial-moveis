import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 250px;
	height: 350px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 10px;
	cursor: pointer;
	transition: 0.3s;
	// padding: 10px;

	&:hover {
		border: 1px solid ${({theme}) => theme.colors.yellow};
	}

	@media (max-width: 600px) {
		width: 190px;
		height: 300px;
	}
`;

export const Image = styled.div`
	width: 100%;
	height: 240px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.lightGray};
	background-color: #353535;
	margin-bottom: auto;
	border-radius: 10px;
	// border: 2px solid ${({theme}) => theme.colors.gray};

	& > svg {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 600px) {
		height: 200px;
	}
`;

export const NewProductInfo = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 10px;
`;

export const NewProductName = styled.span`
	font-weight: bold;
	color: ${({theme}) => theme.colors.yellow};

	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

export const NewProductDescription = styled.span`
	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: auto;
`;

export const Button = styled.div`
	width: 45%;
	height: 25px;
	border-radius: 5px;
	background-color: ${({theme}) => theme.colors.gray};
`;
