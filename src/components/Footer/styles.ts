import styled from 'styled-components';

export const Container = styled.footer`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
	padding: 0 20px;
`;

export const FooterSpan = styled.span`
	font-weight: bold;

	& > a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.yellow};

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FooterLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin: 0 10px;
	background-color: ${({ theme }) => theme.colors.mediumGray};
	color: ${({ theme }) => theme.colors.white};
	transition: 0.3s;

	&:hover {
		color: ${({ theme }) => theme.colors.yellow};
	}
`;

export const FooterLinksContainerSpan = styled.span`
	margin-right: 10px;
`;
