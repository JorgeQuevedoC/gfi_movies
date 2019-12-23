import styled from 'styled-components';

export const Main = styled.div`
	width: 100%;
	height: 100%;
	min-width: 350px;
	flex-grow: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #fff;

	h3,
	li,
	h4 {
		margin-top: 0px;
		color: ${props => props.theme.palette.gray.main};
	}

	h2 {
		margin-bottom: 0px;
		color: ${props => props.theme.palette.primary.main};
		margin-top: 7%;
	}

	.leftPanel {
		display: flex;
		text-align: center;
		font-size: 15px;
		font-weight: bold;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 40%;
		max-width: 60%;
	}

	.rightPanel {
		color: ${props => props.theme.palette.primary.main};
		display: flex;
		text-align: center;
		height: 100%;
		background-color: #fff;
		font-size: 15px;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		width: 40%;

		@media (max-width: 639px) {
			display: none;
		}
	}

	.root {
		height: 100%;
		width: 100%;
		display: flex;
		background-color: #fff;
		justify-items: flex-end;
		align-items: center;
		flex-direction: column;

		img {
			width: 80%;
			height: auto;
		}

		.footer {
			width: 80%;
		}

		.header {
			width: 80%;
		}
	}
`;
