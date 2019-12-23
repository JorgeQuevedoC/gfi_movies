import React from 'react';

export const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
		palette: {
			primary: {
				main: '#005eb8',
				mainRGB: '63, 81, 181',
				shadow: 'rgba(63, 81, 181, 0.5)',
				text: '#FFF',
			},
			secondary: {
				main: '#f50057',
				shadow: 'rgba(245, 0, 87, 0.5)',
				text: 'rgba(0, 0, 0, 0.87)',
			},
			gray: {
				main: '#333',
				text: 'rgba(0, 0, 0, 0.87)',
				rgb: '151,151,151',
				rgb2: '51,51,51',
			},
			cards: {
				main: '#eeeeee',
			},
		},
		space: {
			unit: 8,
		},
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
};

const themeContext = React.createContext(themes.light);

export default themeContext;
