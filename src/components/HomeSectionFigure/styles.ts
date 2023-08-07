import styled, { css } from 'styled-components';

export const Container = styled.figure`
	width: 350px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	border-radius: 20px;
	animation: toemergefromleft 1.2s ease;
	cursor: pointer;
	position: relative;

	&:hover > div {
		display: flex;
	}

	@keyframes toemergefromleft {
		0% {
			transform: translateX(-70px);
			opacity: 0%;
		}

		70% {
			transform: translateX(5px);
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}

	@media (max-width: 900px) {
		width: 250px;
		height: 250px;
	}
`;

export const ProductImage = styled.img<{ isWiderThanTall: boolean }>`
	${
	({isWiderThanTall}) => isWiderThanTall
	? css`height: 350px;`
	: css`width: 100%;`
	}
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
`;

export const Shadow = styled.div`
	display: none;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 20px;
	position: absolute;
	z-index: 10;
	padding: 20px;
`;

export const ProductName = styled.span`
	font-weight: bold;
	text-align: center;
	color: ${({theme}) => theme.colors.white};
`;
