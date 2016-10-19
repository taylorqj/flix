import React from 'react';
import movies from '../movies.json';
import FeaturedMovie from './FeaturedMovie';

export const Home = () => (
	<div>
		<h2>
			Featured Movies
		</h2>

		{movies.map((movie, i) => (
			<FeaturedMovie
				movie={movie}
				key={i}
			/>
		))}
	</div>
);


export default Home;
