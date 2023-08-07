import styled from 'styled-components';
import { ProductSkeletonProps } from '.';

export const Container = styled.div<ProductSkeletonProps>`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
	background-color: ${({theme}) => theme.colors.mediumGray};
	border-radius: 20px;
	animation: loading-product 1.5s infinite;
	animation-delay: ${({delay}) => delay};

	@media (max-width: 700px) {
		padding: 10px;
		gap: 10px;
	}

	@keyframes loading-product {
		0% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(-20px);
		}

		100% {
			transform: translateY(0px);
		}
	}
`;

export const ProductNameSkeleton = styled.span`
	width: 80%;
	height: 40px;
	border-radius: 10px;
	background-color: ${({theme}) => theme.colors.gray};
	animation: loading-name 1.5s infinite;

	@media (max-width: 700px) {
		height: 30px;
	}

	@keyframes loading-name {
		0% {
			width: 80%;
		}

		100% {
			width: 100%;
		}
	}
`;

export const ProductImageSkeleton = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 20px;
	background-color: ${({theme}) => theme.colors.gray};
	animation: loading-image 1s infinite ease;

	@media (max-width: 700px) {
		width: 180px;
		height: 180px;
	}

	@keyframes loading-image {
		0% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 0%,
				${({ theme }) => theme.colors.mediumGray} 25%
			);
		}

		25% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 25%,
				${({ theme }) => theme.colors.mediumGray} 50%
			);
		}

		50% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 50%,
				${({ theme }) => theme.colors.mediumGray} 75%
			);
		}

		75% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 75%,
				${({ theme }) => theme.colors.mediumGray} 100%
			);
		}

		100% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 0%,
				${({ theme }) => theme.colors.mediumGray} 25%
			);
		}
	}
`;
