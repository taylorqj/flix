import React, { PropTypes } from 'react';

export const FeaturedMovie = ({ movie }) => (
	<div className="featured-movie">
		<div className="featured-movie__image">
			<img src={movie.image} />
		</div>

		<div className="featured-movie__info">
			<p><b>{ movie.name }</b></p>
			<p>{ movie.director }</p>
			<p>{ movie.released }</p>
		</div>
	</div>
);

FeaturedMovie.propTypes = {
	movie: PropTypes.string.isRequired,
};

export default FeaturedMovie;
