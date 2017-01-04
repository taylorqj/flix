import React, { PropTypes } from 'react';
import Link from 'react-router/Link';

const FeaturedMovie = ({ movie }) => (
  <div className="featured-movie">
    <div className="featured-movie__image">
      <Link to={`/movies/${movie.id}`}>
        <img alt={movie.name} src={movie.image} />
      </Link>
    </div>

    <div className="featured-movie__info">
      <p><b>{ movie.name }</b></p>
      <p>{ movie.director }</p>
      <p>{ movie.released }</p>
    </div>
  </div>
);

FeaturedMovie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedMovie;
