import React, { useEffect, useContext, useReducer } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
//REACT ROUTER
import { Switch, Route } from 'react-router-dom';
//CONTAINERS
import Catalogo from './containers/Catalogo/Catalogo';
import Login from './containers/Login/Login';
import NavBar from './components/NavBar/NavBar';
import ErrorScreen from './containers/ErrorScreen/ErrorScreen';
//STYLED COMPONENTS
import { SwitchWrapper } from './styled';
//THEME CONTEXT
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/themeContext';
//AUTH CONTEXT
import AuthContext from './contexts/authContext';
import { sidebarLinksClient } from './constants/constants';
//CONSTANTS
import { sessionKey, sessionImagesKey, cryptoPassword } from './constants/constants';
import CryptoJS from 'crypto-js';

const App = () => {
	//GLOBAL FUNCTIONS
	const registerUser = (username, favorites) => {
		dispatch({
			type: 'SET_USER_INFO',
			payload: {
				username,
				favorites,
				login: registerUser,
				logout: unregisterUser,
				addFavorite: addFavorite,
				removeFavorite: removeFavorite,
				notificationMessage: '',
				displayNotification: false,
			},
		});
	};
	const unregisterUser = () => {
		sessionStorage.removeItem(sessionKey);
		sessionStorage.removeItem(sessionImagesKey);
		dispatch({ type: 'UNSET_USER_INFO' });
		window.location.replace('/');
		window.location.reload();
	};
	const setFavorites = () => {
		dispatch({ type: 'SET_FAVORITE' });
	};
	const addFavorite = movie => {
		const currentFavorites = JSON.parse(localStorage.getItem('favorites'));
		const newFavorites = [...currentFavorites, movie];
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
		dispatch({ type: 'ADD_FAVORITE', payload: newFavorites });
	};
	const removeFavorite = movie => {
		const currentFavorites = JSON.parse(localStorage.getItem('favorites'));
		const newFavorites = currentFavorites.filter(favorite => favorite !== movie);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
		dispatch({ type: 'REMOVE_FAVORITE', payload: newFavorites });
	};
	const setNotification = message => {
		dispatch({ type: 'SET_NOTIFICATION', payload: message });
	};
	const setLoading = value => {
		dispatch({ type: 'SET_LOADING', payload: value });
	};

	//AUTH REDUCER
	const userInfoReducer = (state, action) => {
		switch (action.type) {
			case 'SET_USER_INFO':
				return { ...action.payload };
			case 'UNSET_USER_INFO':
				return { ...userInfo };
			case 'ADD_FAVORITE':
				return { ...state, favorites: action.payload };
			case 'SET_FAVORITE':
				return { ...state, favorites: action.payload };
			case 'REMOVE_FAVORITE':
				return { ...state, favorites: action.payload };
			case 'SET_NOTIFICATION':
				return {
					...state,
					notificationMessage: action.payload,
				};
			case 'SET_LOADING':
				return {
					...state,
					loading: action.payload,
				};
			default:
				return state;
		}
	};

	//AUTH VARIABLES
	const [userInfo, dispatch] = useReducer(userInfoReducer, {
		username: '',
		favorites: [],
		login: registerUser,
		logout: unregisterUser,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
		setFavorite: setFavorites,
		notificationMessage: '',
		setNotification: setNotification,
		setLoading: setLoading,
		loading: false,
	});

	//SETTING SESSION CONTEXT
	useEffect(() => {
		const session = sessionStorage.getItem(sessionKey);

		if (session) {
			const bytes = CryptoJS.AES.decrypt(session.toString(), cryptoPassword);
			const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
			const currentFavorites = localStorage.getItem('favorites');
			const { username } = decryptedData;
			dispatch({
				type: 'SET_USER_INFO',
				payload: {
					username: username,
					favorites: currentFavorites,
					login: registerUser,
					logout: unregisterUser,
					addFavorite: addFavorite,
					removeFavorite: removeFavorite,
					setFavorite: setFavorites,
					notificationMessage: '',
					setNotification: setNotification,
					setLoading: setLoading,
					loading: false,
				},
			});
		}
	}, []);

	//NOTIFICATION WATCHER
	useEffect(() => {
		if (userInfo.notificationMessage !== '') {
			const timer = setTimeout(() => {
				setNotification('');
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [userInfo.notificationMessage]);

	//CONTEXTS
	const theme = useContext(ThemeContext);
	const muiTheme = createMuiTheme({
		typography: {
			fontFamily: ['Montserrat'].join(','),
			h1: {
				fontFamily: 'Montserrat',
			},
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': ['Montserrat'],
				},
			},
		},
	});

	return (
		<>
			<CssBaseline />
			<MuiThemeProvider theme={muiTheme}>
				<ThemeProvider theme={theme}>
					<AuthContext.Provider value={userInfo}>
						<SwitchWrapper>
							{userInfo.username !== '' ? (
								<NavBar title={'Bienvenido,'} sidebarLinks={sidebarLinksClient}>
									<Switch>
										<Route path="/" exact component={Catalogo} />
										<Route path="/" component={ErrorScreen} />
									</Switch>
								</NavBar>
							) : (
								<Route path="/" component={Login} />
							)}
						</SwitchWrapper>
					</AuthContext.Provider>
				</ThemeProvider>
			</MuiThemeProvider>
		</>
	);
};

export default App;
