import styled, { createGlobalStyle } from "styled-components";

import { ThemeProps } from "./theme";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Ysabeau Infant', sans-serif;
	}

	body {
		background-color: ${({ theme }: { theme: ThemeProps }) => theme.colors.darkGray};
		color: ${({ theme }: { theme: ThemeProps }) => theme.colors.white};
	}
`;

export const PageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
