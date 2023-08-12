import styled from 'styled-components';

export const FormContainer = styled.form`
	width: 400px;
	border-radius: 10px;
	padding: 20px;
	background-color: black;
	border: 1px solid ${({theme}) => theme.colors.mediumGray};
`;

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	color: ${({theme}) => theme.colors.white};
	font-weight: 500;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 50px;
	border-radius: 10px;
	padding: 10px;
	background-color: ${({theme}) => theme.colors.mediumGray};
	border: none;
	color: ${({theme}) => theme.colors.white};
	margin: 5px auto;
	font-size: 1rem;
`;

export const FormSubmitButton = styled(FormInput)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	background-color: ${({theme}) => theme.colors.yellow};
	color: ${({theme}) => theme.colors.white};
	font-weight: bold;
	cursor: pointer;
	padding: 0px;

	& > svg {
		width: 100px;
	}
`;

export const FormTitle = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	font-size: 1.8rem;
	color: ${({theme}) => theme.colors.yellow};
	margin: auto;
`;
