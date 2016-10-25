import React from 'react';
import movies from '../movies.json';
import FeaturedMovie from './FeaturedMovie';

export const Home = () => (
    <div>
        <h2 className="featured-movies__header">
            Featured Movies
        </h2>

        <hr />

        <div className="featured-movies">
            {movies.map((movie, i) => (
                <FeaturedMovie
                    movie={movie}
                    key={i}
                />
            ))}
        </div>

    </div>
);


export default Home;
