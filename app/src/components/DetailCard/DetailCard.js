import React from 'react';
import { Main } from './styled';

const DetailCard = props => {
	const { card, movie } = props;

	return (
		<Main>
			<div className="leftPanel">{card}</div>
			<div className="rightPanel">
				<h2>Titulo</h2>
				<h3>{movie.Title}</h3>

				<h2>Año</h2>
				<h3>{movie.Year}</h3>

				<h2>Tipo</h2>
				<h3>{movie.Type}</h3>
			</div>
		</Main>
	);
};

export default DetailCard;
