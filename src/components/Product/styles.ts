import styled, { css } from 'styled-components';

export const Container = styled.div<{ delay: number }>`
	width: 270px;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.3s;
	animation: toemerge 1s ease;
	${({ delay }) => `animation-delay: ${delay}s;`}
	background-color: ${({ theme }) => theme.colors.mediumGray};

	&:hover {
		background-color: ${({ theme }) => theme.colors.yellow};
		transform: translateY(-10px);
	}

	@keyframes toemerge {
		0% {
			opacity: 0%;
			transform: translateY(50px);
		}

		100% {
			opacity: 100%;
			transform: translateY(0px);
		}
	}

	@media (max-width: 600px) {
		width: 180px;
	}
`;

export const ProductName = styled.abbr`
	width: 100%;
	display: flex;
	font-weight: bold;
	margin-bottom: 10px;
	text-decoration: none;
	overflow: hidden;
	white-space: nowrap;

	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
`;

export const Figure = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 250px;
	overflow: hidden;
	border-radius: 10px;

	@media (max-width: 600px) {
		height: 160px;
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
