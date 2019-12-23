import React, { useState, useEffect, useContext } from 'react';
//MATERIAL UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//OWN LIBRARIES
import { notificationHandler } from '../../helpers/snackbars';
import { Main, BG } from './styled';
import AuthContext from '../../contexts/authContext';
import CryptoJS from 'crypto-js';
//CONSTANTS
import { urls, sessionKey, cryptoPassword } from '../../constants/constants';

function Login() {
	//VARIABLES
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [fetchNotification, setFetchNotification] = useState('');
	const [displayNotification, isNotificationDisplayed] = useState(false);

	//CONTEXT
	const authContext = useContext(AuthContext);

	//FUNCTIONS
	const keyDownHandler = event => {
		if (event.keyCode === 13) {
			login(event);
		}
	};

	const login = event => {
		event.preventDefault();
		if (password && password === 'password' && username && username === 'username') {
			const currentFavorites = localStorage.getItem('favorites');
			if (!currentFavorites) {
				localStorage.setItem('favorites', JSON.stringify([]));
			}
			const encryptedData = CryptoJS.AES.encrypt(
				JSON.stringify({ username: 'username', favorites: currentFavorites }),
				cryptoPassword
			);
			setFetchNotification(`Éxito: username`);
			authContext.login(username, currentFavorites || []);
			sessionStorage.setItem(sessionKey, encryptedData);
			goHome();
		} else {
			setFetchNotification(`Error: Usuario o contraseña incorrectos`);
		}
	};

	const goHome = () => {
		setUsername('');
		setPassword('');
	};

	//NOTIFICATION WATCHER
	useEffect(() => {
		if (fetchNotification) {
			isNotificationDisplayed(true);
			const timer = setTimeout(() => {
				isNotificationDisplayed(false);
				setFetchNotification('');
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [fetchNotification]);

	return (
		<BG>
			<Main>
				<Paper className="paper2">
					<Avatar className="avatar">
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Bienvenido
					</Typography>
				</Paper>
				<Paper className="paper">
					<form className="form">
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="username">Usuario</InputLabel>
							<Input
								name="username"
								value={username}
								onChange={event => setUsername(event.target.value)}
								onKeyPress={event => keyDownHandler(event)}
								autoFocus
							/>
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor="password">Contraseña</InputLabel>
							<Input
								name="password"
								type="password"
								value={password}
								onChange={event => setPassword(event.target.value)}
								onKeyPress={event => keyDownHandler(event)}
							/>
						</FormControl>
						<Button type="submit" fullWidth variant="contained" className="submit" onClick={event => login(event)}>
							Ingresar
						</Button>
					</form>
					{displayNotification ? notificationHandler(fetchNotification, displayNotification) : ''}
				</Paper>
			</Main>
		</BG>
	);
}

export default Login;
