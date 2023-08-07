import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 20px;
`;

export const TitleSkeleton = styled.div`
	width: 70%;
	height: 70px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 10px;
	animation: loading-title 1s infinite ease;
	margin-top: 20px;

	@media (max-width: 1000px) {
		width: 90%;
	}

	@media (max-width: 700px) {
		height: 60px;
	}

	@keyframes loading-title {
		0% {
			background-image: linear-gradient(to right,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 0%,
				${({ theme }) => theme.colors.mediumGray} 25%
			);
			transform: translateX(0px);
		}

		25% {
			background-image: linear-gradient(to right,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 25%,
				${({ theme }) => theme.colors.mediumGray} 50%
			);
		}

		50% {
			background-image: linear-gradient(to right,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 50%,
				${({ theme }) => theme.colors.mediumGray} 75%
			);
			transform: translateX(30px);
		}

		75% {
			background-image: linear-gradient(to right,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 75%,
				${({ theme }) => theme.colors.mediumGray} 100%
			);
		}

		100% {
			background-image: linear-gradient(to right,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 0%,
				${({ theme }) => theme.colors.mediumGray} 25%
			);
			transform: translateX(0px);
		}
	}
`;

export const ImageContainerSkeleton = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	margin-top: 70px;
	gap: 30px;

	@media (max-width: 1200px) {
		flex-wrap: wrap;
	}

	@media (max-width: 700px) {
		margin-top: 20px;
	}
`;

export const ImageSkeleton = styled.div<{ delay: string }>`
	width: 300px;
	height: 300px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	border-radius: 20px;
	margin-right: 60px;
	animation: loading-image 1s infinite ease;
	animation-delay: ${({delay}) => delay};

	@media (max-width: 1200px) {
		width: 180px;
		height: 180px;
		margin-right: 20px;
	}

	@keyframes loading-image {
		0% {
			background-image: linear-gradient(135deg,
				${({ theme }) => theme.colors.mediumGray} 0%,
				${({ theme }) => theme.colors.gray} 0%,
				${({ theme }) => theme.colors.mediumGray} 25%
			);
			transform: translateX(0px);
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
			transform: translateX(30px);
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
			transform: translateX(0px);
		}
	}
`;
