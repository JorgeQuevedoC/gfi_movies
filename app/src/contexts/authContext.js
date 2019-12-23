import React from 'react';

const session = {
	username: '',
	favorites: [],
	login: () => {},
	logout: () => {},
	addFavorite: () => {},
	removeFavorite: () => {},
	setFavorite: () => {},
	notificationMessage: '',
	displayNotification: false,
	setNotification: () => {},
	setLoading: () => {},
	loading: false,
};

const authContext = React.createContext(session);

export default authContext;
