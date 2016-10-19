import React, { PropTypes } from 'react';

export const FeaturedMovie = ({ movie }) => (
	<div>
		Title: { movie.name }
		Director: { movie.director }
		Released: { movie.released }
	</div>
);

FeaturedMovie.propTypes = {
	movie: PropTypes.string.isRequired,
};

export default FeaturedMovie;
