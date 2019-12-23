import styled from 'styled-components';

export const Main = styled.main`
	display: flex;

	& .menuButton {
		margin-right: 36;
	}

	& .hide {
		display: none;
	}

	& .drawer {
		width: ${props => props.drawerWidth};
		flex-shrink: 0;
		white-space: nowrap;
	}

	& .link {
		text-decoration: none;
		color: ${props => props.theme.palette.secondary.text};
	}

	& .content {
		font-family: 'Montserrat';
		flex-grow: 1;
		width: calc(100vw - ${props => (props.open ? props.drawerWidth : '73')}px);
		height: calc(100vh - 64px);

		@media (min-width: 639px) and (max-width: 1000px) {
			height: calc(100vh - 48px);
			width: calc(100vw - ${props => (props.open ? props.drawerWidth : '57')}px);
		}

		@media (max-width: 639px) {
			height: calc(100vh - 48px);
			width: calc(100vw - ${props => (props.open ? props.drawerWidth : '57')}px);
		}
	}

	& #userName {
		margin-left: 15px;
	}

	& #navBar {
		background-color: ${props => props.theme.palette.primary.main};
	}

	& #navBarIcon {
		background-color: ${props => props.theme.palette.primary.main};
	}
`;
