import React, { PropTypes } from 'react';
import movies from '../movies.json';

export const Movie = ({ params: { movieId } }) => {
	const movie = movies.find(
		movie => movie.id === parseInt(movieId)
	);

	return (
		<div>
			<div className="movie-image">
				<img src={movie.image} />
			</div>

			<div className="movie-title">
				<h2>{ movie.name }</h2>
			</div>

			<div className="movie-information">
				<p>{ movie.director }</p>
				<p>{ movie.released }</p>
			</div>

			<div className="movie-reviews">
				<h2>Reviews</h2>

				{movie.reviews.map((review, i) => (
					<div key={i}>
						<h3>{ review.title }</h3>
						<p>{ review.body }</p>
						<p>{ review.author }</p>
					</div>
				))}
			</div>
		</div>
	);
};

Movie.propTypes = {
	params: PropTypes.shape({
		movieId: PropTypes.string.isRequired,
	}).isRequired,
};

export default Movie;
