import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import GradeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Liked from '@material-ui/icons/Favorite';
import { Main } from './styled';
import Img from 'react-image';

const Cards = props => {
	const {
		movieInfo,
		movie,
		favorite,
		addFavorite,
		removeFavorite,
		viewDetails,
		index,
		width,
		height,
		isModalOpen,
		displayModal,
		errorImageSrc,
	} = props;

	let source = movieInfo.imgPath;

	return (
		<Main cardWidth={width} cardHeight={height} isModal={isModalOpen}>
			<div className="root">
				<Img
					className="img"
					src={[source, errorImageSrc]}
					alt={movieInfo.label}
					onClick={displayModal ? null : () => viewDetails(index, movie.Title)}
					unloader={<img src={errorImageSrc} />}
				/>
				<Paper square elevation={0} className="header">
					<Typography align="center">{movieInfo.label}</Typography>
				</Paper>
				<Paper square elevation={0} className="footer">
					<Tooltip title="Pelicula">
						<div aria-label="Delete" className="footerIcon">
							{favorite ? (
								<Liked
									onClick={() => {
										removeFavorite(movie.Title);
										isModalOpen(false);
									}}
								/>
							) : (
								<GradeIcon
									onClick={() => {
										addFavorite(movie.Title);
										isModalOpen(false);
									}}
								/>
							)}
						</div>
					</Tooltip>
				</Paper>
			</div>
		</Main>
	);
};

export default Cards;
