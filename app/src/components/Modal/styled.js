import styled from 'styled-components';

export const ModalNotContent = styled.div`
	height: 70%;
	width: 70%;
`;

export const ModalBackground = styled.div`
	height: 100%;
	width: 100%;
	background-color: rgb(${props => props.theme.palette.gray.rgb}, 0.9);
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 5;
	left: 0;
	top: 0;
`;
