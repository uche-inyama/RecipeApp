import React from 'react';
import RecipeList from './RecipeList';
import PropTypes from 'prop-types';

const Favorites = ({ state, toggleFavorite}) => (
	<main>
		<h2 className="h2_favorite">Favorites</h2>
		<RecipeList
			recipes={ state.recipes.filter( r => state.favorites.includes(r.id))}
			favorites={state.favorites}
			onFavorites={toggleFavorite}
		 />
	</main>
);

 Favorites.PropTypes = {
	state: PropTypes.object,
	toggleFavorite: PropTypes.func,
};

export default Favorites;