import styled from 'styled-components';

export const CatalogoScreen = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-flow: row wrap;
	align-items: flex-start;
`;

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const SearchBar = styled.input`
	font-size: 18px;
	line-height: 29px;
	word-spacing: 7px;
	margin: 15px 10px;
	border: 1px solid #005cb3;
	color: #005cb3;
	border-radius: 5px;
	width: 50%;
	font-family: 'Montserrat';
`;

export const SearchBtn = styled.button`
	font-size: 18px;
	line-height: 29px;
	margin: 15px 10px;
	border: 1px solid #005cb3;
	color: #fff;
	background-color: #005cb3;
	border-radius: 5px;
	width: 10%;
	font-family: 'Montserrat';

	:hover {
		cursor: pointer;
	}
`;
