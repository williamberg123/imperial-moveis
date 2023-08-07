import styled from "styled-components";

export const Container = styled.div``;

export const PageTitle = styled.span`
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	color: ${({theme}) => theme.colors.yellow};
	background-color: ${({theme}) => theme.colors.darkGray};
	padding: 20px 10px;
	text-transform: uppercase;
	position: sticky;
	top: 0;
	z-index: 10;

	@media (max-width: 700px) {
		font-size: 1.3rem;
	}
`;

export const ProductsContainer = styled.div`
	max-width: 1400px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	padding: 10px;
	margin-top: 70px;
	flex-wrap: wrap;
	gap: 30px;
	margin-bottom: 90px;

	@media (max-width: 600px) {
		margin-top: 30px;
	}
`;
