import React from 'react';
import propTypes from 'prop-types';

const RecipeListItem = ({ recipe, favorite, onClick, onFavorite}) => (
<li 
	key={recipe.id}
	onClick={() => onClick(recipe.id)}>
		<span className="ticked"
			onClick={e => {
				e.stopPropagation();
				onFavorite(recipe.id)
			}}
		>{favorite ? '✅' : '◻️'}</span>
        <span>{recipe.name}</span>
        <span>{recipe.category}</span>
  	</li>
)

RecipeListItem.propTypes = {
	recipe: propTypes.object,
	favorite: propTypes.bool,
	onClick: propTypes.func,
	onFavorite: propTypes.func,
}

export default RecipeListItem;