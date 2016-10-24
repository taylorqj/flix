import React, { PropTypes } from 'react';
import movies from '../movies.json';

export const Movie = ({ params: { movieId } }) => {
	const movie = movies.find(
		movie => movie.id === parseInt(movieId)
	);

	return (
		<div>
			<div className="movie-title">
				<h2>{ movie.name }</h2>

				<hr />
			</div>

			<div className="movie-container">
				<div className="movie-image">
					<img src={movie.image} />
				</div>

				<div className="movie-information">
					<p><b>Director:</b> { movie.director }</p>
					<p><b>Release Date:</b> { movie.released }</p>
				</div>

			</div>

			<div className="movie-reviews">
				<h2>Reviews</h2>

				<hr />

				{movie.reviews.map((review, i) => (
					<div key={i} className="movie-review">
						<h3>
							{ review.title } <span className="review-author">by { review.author }</span>
						</h3>

						<p>{ review.body }</p>
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
