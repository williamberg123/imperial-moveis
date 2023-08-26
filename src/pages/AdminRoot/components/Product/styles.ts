import styled, { css } from 'styled-components';

export const Container = styled.div`
	width: 250px;
	height: fit-content;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 10px;

	@media (max-width: 600px) {
		width: 190px;
	}
`;

export const ProductFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 250px;
	overflow: hidden;
	border-radius: 10px;

	@media (max-width: 600px) {
		height: 200px;
	}
`;

export const ProductImage = styled.img<{ isWiderThanTall: boolean }>`
	display: flex;
	border-radius: 10px;
	${({ isWiderThanTall }) => isWiderThanTall
		? css`height: 250px`
		: css`width: 100%`
	}
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

export const ProductName = styled.span`
	font-weight: bold;
	color: ${({theme}) => theme.colors.yellow};
	white-space: nowrap;
	overflow: hidden;

	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
`;

export const ProductDescription = styled.span`
	font-weight: 300;
	white-space: nowrap;
	overflow: hidden;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const ProductActionsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10px;
`;

export const EditButton = styled.button`
	width: 45%;
	padding: 5px 10px;
	border-radius: 5px;
	border: none;
	background-color: ${({theme}) => theme.colors.yellow};
	cursor: pointer;

	&:hover {
		background-color: ${({theme}) => theme.colors.gray};
	}
`;

export const DeleteButton = styled(EditButton)``;
