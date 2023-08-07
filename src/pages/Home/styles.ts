import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	& > section:nth-child(even) > span {
		justify-content: end;
		padding-right: 50px;
		padding-left: 10px;
	}

	@media (max-width: 700px) {
		padding-right: -0px;
	}
`;

export const Section = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding: 20px;
	border-top: 1px solid ${({theme}) => theme.colors.mediumGray};
`;

export const TitleSection = styled.span`
	width: calc(100% + 40px);
	display: flex;
	align-items: center;
	height: fit-content;
	font-weight: bold;
	font-size: 2.3rem;
	// margin: 20px 50px 0 auto;
	padding: 20px 10px 20px 50px;
	margin-left: -20px;
	animation: toemergefromright 1.2s ease;
	position: sticky;
	top: 0;
	background-color: ${({theme}) => theme.colors.darkGray};
	z-index: 5;

	& > svg {
		margin-left: 10px;
		margin-top: 5px;
		color: ${({theme}) => theme.colors.yellow};
	}

	@keyframes toemergefromright {
		0% {
			transform: translateX(70px);
			opacity: 0%;
		}

		100% {
			transform: translateX(0px);
			opacity: 100%;
		}
	}

	@media (max-width: 700px) {
		font-size: 1.5rem;
		padding: 15px 15px 15px 30px;
	}
`;

export const EnterpriseInfoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	margin-top: 100px;
	gap: 20px;

	& > figure:nth-child(2) {
		animation-delay: 0.1s;
	}

	& > figure:nth-child(3) {
		animation-delay: 0.2s;
	}
`;

export const EnterpriseInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ContactLink = styled.a`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
	font-size: 1.5rem;
	margin: 15px auto;
	text-decoration: none;
	color: ${({theme}) => theme.colors.white};
	font-weight: 500;

	& > svg {
		margin-left: 20px;
		width: 60px;
		height: 60px;
		background-color: ${({theme}) => theme.colors.mediumGray};
		border-radius: 50%;
		padding: 15px;
	}

	&:hover {
		color: ${({theme}) => theme.colors.yellow};
		transition: 0.3s;
	}

	@media (max-width: 700px) {
		font-size: 1.2rem;
		padding: 15px 15px 15px 30px;
		margin: 5px auto;

		& > svg {
			width: 50px;
			height: 50px;
		}
	}
`;

export const ProfileImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	box-shadow: 1px 1px 20px ${({theme}) => theme.colors.mediumGray};
`;
