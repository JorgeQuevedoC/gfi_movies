import styled from 'styled-components';

export const Main = styled.div`
	/* max-width: ${props => (props.isModal ? '100%' : props.cardWidth ? props.cardWidth : '250px')}; */
	width: 350px;
	max-width: 350px;
	height: 490px;
	flex-grow: 1;
	padding: 15px;
	align-items: center;
	justify-content: center;

	& .header {
		display: flex;
		text-align: center;
		height: 30px;
		opacity: 0.75;
		font-size: 15px;
		font-weight: bold;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		background-color: #fff;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}

	img {
		height: 100%;
		max-width: 250px;
		overflow: hidden;
		display: block;
		width: auto;
		cursor: pointer;
	}

	& .footer {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 50px;
		border-top: 1px solid ${props => props.theme.palette.primary.main};
	}

	& .footerIcon {
		cursor: pointer;
	}

	& .root {
		max-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
