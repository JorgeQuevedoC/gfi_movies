import React from 'react';
import Exit from '@material-ui/icons/ExitToApp';
import Catalog from '@material-ui/icons/Movie';
import CryptoJS from 'crypto-js';

export const urls = {
	getMovies: `http://www.omdbapi.com/?apikey=f12ba140&s=`,
};

//SESSION AND CRYPTO KEYS
export const sessionKey = 'lkjsdfbm24jknw48';
export const sessionImagesKey = 'lkjaddfgjrtuy8';
export const cryptoPassword = 'hbc67q4gfQ$%dcvnweor';

//SIDEBAR LINKS CLIENT
export const sidebarLinksClient = [
	{ text: 'Películas', route: '/', icon: <Catalog /> },
	{ text: 'Logout', route: '/', icon: <Exit /> },
];

//Session Decryptor
export const sessionDecryptor = (sessionKey, cryptoPassword) => {
	const encryptedData = sessionStorage.getItem(sessionKey);
	const decryptedData = CryptoJS.AES.decrypt(encryptedData.toString(), cryptoPassword);
	const decryptedDataJSON = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
	return decryptedDataJSON;
};

//Session Encryptor
export const sessionEncryptor = (newSession, sessionKey, cryptoPassword) => {
	const newSessionEncrypted = CryptoJS.AES.encrypt(JSON.stringify(newSession), cryptoPassword);
	sessionStorage.setItem(sessionKey, newSessionEncrypted);
	return false;
};
