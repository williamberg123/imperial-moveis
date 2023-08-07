import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 20;
	backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
	width: 80%;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.colors.darkGray};
	border-radius: 20px;

	@media (max-width: 1000px) {
		width: 90%;
		min-height: 90%;
		flex-direction: column;
	}
`;

export const ProductFigure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60%;
	height: 100%;

	@media (max-width: 1000px) {
		width: 100%;
		height: 50%;
	}
`;

export const ProductImage = styled.img<{ isWiderThanTall: boolean }>`
	border-radius: 20px;

	@media (max-width: 1600px) {
		${({ isWiderThanTall }) => isWiderThanTall
			? css`width: 100%;`
			: css`height: 100%;`
		}
	}

	@media (max-width: 1000px) {
		// height: 100%;
		// width: initial;

		${({ isWiderThanTall }) => isWiderThanTall
			? css`width: 100%; height: initial;`
			: css`height: 100%; width: initial;`
		}
	}
`;

export const ProductInfoContainer = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	flex-direction: column;
	padding: 20px;

	@media (max-width: 1000px) {
		width: 100%;
		height: 50%;
	}
`;

export const ProductName = styled.abbr`
	font-weight: bold;
	font-size: 2rem;
	text-align: center;
	text-decoration: none;
	animation: emerge 1s ease;
	color: ${({ theme }) => theme.colors.yellow};

	@keyframes emerge {
		0% {
			opacity: 0%;
			transform: translateY(20px);
		}

		100% {
			opacity: 100%;
			transform: translateY(0);
		}
	}
`;

export const ProductDescription = styled.span`
	text-align: justify;
	text-indent: 2rem;
	color: ${({ theme }) => theme.colors.lightGray};
	margin-top: 20px;
	font-size: 1.2rem;
	animation: emergedescription 1s ease;

	@keyframes emergedescription {
		0% {
			opacity: 0%;
			transform: translateX(20px);
		}

		100% {
			opacity: 100%;
			transform: translateX(0);
		}
	}
`;

export const CloseModal = styled.button`
	display: flex;
	width: 50px;
	height: 50px;
	position: absolute;
	top: 20px;
	right: 20px;
	border-radius: 50%;
	color: white;
	background-color: transparent;
	border: none;
	cursor: pointer;

	& > svg {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 700px) {
		width: 40px;
		height: 40px;
		top: 10px;
		right: 10px;
	}
`;
