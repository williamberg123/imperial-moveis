import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 10;
`;

export const CloseModal = styled.button`
	border-radius: 50%;
	border: none;
	background-color: transparent;
	color: white;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;

	& svg {
		width: 50px;
		height: 50px;
	}
`;
