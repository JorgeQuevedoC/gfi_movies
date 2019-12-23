import React, { useContext, useEffect, useState } from 'react';
import Cards from '../../components/Cards/Cards';
import DetailCard from '../../components/DetailCard/DetailCard';
import { CatalogoScreen, SearchBar, SearchBarContainer, SearchBtn } from './styled';
//CONTEXT
import AuthContext from '../../contexts/authContext';
//COMPONENTS
import CircularIndeterminate from '../../components/Loader/Loader.js';
import Modal from '../../components/Modal/Modal';
//OWN FUNCTIONS
import { notificationHandler } from '../../helpers/snackbars';
import logo from './../../Icons/Bell.js';
//CONSTANTS
import { urls } from '../../constants/constants';

const Catalogo = props => {
	//VARIABLES
	const [movies, setMovies] = useState([]);
	const [displayModal, isModalOpen] = useState(false);
	const [modalShown, setModalShown] = useState('');
	const [search, setSearch] = useState('');

	//CONTEXT
	const authContext = useContext(AuthContext);
	const {
		loading,
		setLoading,
		favorites,
		addFavorite,
		removeFavorite,
		username,
		setNotification,
		notificationMessage,
	} = authContext;

	//API PARA OBTENER ESTA LISTA
	const searchHandler = () => {
		setLoading && setLoading(true);

		fetch(`${urls.getMovies}${search}`, {
			method: 'GET',
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					setLoading && setLoading(false);
					throw new Error('Error en la llamada');
				}
			})
			.then(data => {
				setLoading && setLoading(false);
				if (data.Response) {
					setMovies(data.Search);
				} else {
					setNotification ? setNotification('ERROR EN LA LLAMADA') : window.location.reload();
				}
			})
			.catch(err => {
				setNotification ? setNotification(`${err}`) : window.location.reload();
				setLoading ? setLoading(false) : window.location.reload();
			});
	};

	//MODAL COMPONENT TO SHOW
	const modalToShow = (index, title) => {
		const movie = movies.filter(movie => {
			if (movie.Title === title) {
				return movie;
			}
		})[0];
		const image = {
			label: `${movie.Title}`,
			imgPath: movie.Poster,
		};
		const card = (
			<Cards
				movieInfo={image}
				movie={movie}
				favorite={favorites.includes(movie.Title)}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				viewDetails={modalToShow}
				username={username}
				index={index}
				key={`${movie.imdbID}`}
				width={'40vw'}
				isModalOpen={isModalOpen}
				displayModal={displayModal}
				errorImageSrc={logo}
			/>
		);
		const detailed = <DetailCard card={card} movie={movie} />;
		setModalShown(detailed);
		isModalOpen(true);
	};

	const cards = movies.map((movie, index) => {
		const movieInfo = {
			label: `${movie.Title}`,
			imgPath: movie.Poster,
		};

		return (
			<Cards
				movieInfo={movieInfo}
				movie={movie}
				favorite={favorites.includes(movie.Title)}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
				viewDetails={modalToShow}
				username={username}
				index={index}
				key={`${movie.imdbID}`}
				isModalOpen={isModalOpen}
				errorImageSrc={logo}
			/>
		);
	});

	return (
		<div>
			{loading ? (
				<CircularIndeterminate />
			) : (
				<CatalogoScreen>
					<SearchBarContainer>
						<SearchBar value={search} onChange={e => setSearch(e.target.value)} />
						<SearchBtn onClick={searchHandler}>Buscar</SearchBtn>
					</SearchBarContainer>
					{cards}
				</CatalogoScreen>
			)}
			{displayModal ? <Modal handleClose={isModalOpen} component={modalShown} /> : ''}
			{notificationMessage && notificationMessage !== '' ? notificationHandler(notificationMessage, true) : ''}
		</div>
	);
};

export default Catalogo;
