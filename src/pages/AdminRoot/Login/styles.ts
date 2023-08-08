import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 20px;

	@media (max-width: 700px) {
		align-items: center;
	}

	@media (max-width: 500px) {
		& form {
			width: 100%;
		}
	}
`;

export const AdminPageContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const AdminPageTitle = styled.span`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 2.2rem;
	color: ${({theme}) => theme.colors.yellow};

	& > svg {
		color: ${({theme}) => theme.colors.white};
		margin-left: 10px;
	}

	@media (max-width: 700px) {
		font-size: 1.5rem;
	}
`;

export const AdminPageSubtitle = styled.span`
	font-size: 1.5rem;
	color: ${({theme}) => theme.colors.lightGray};
	margin-top: 10px;

	@media (max-width: 700px) {
		font-size: 1.1rem;
	}
`;
