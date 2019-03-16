import React from 'react';
import propTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({  favorites, recipes, ...props }) => (
	<div className ="list">
	    <ul>
	    {recipes.map(recipe => (
	    	<RecipeListItem 
	    		key={recipe.id}
	    		recipe={recipe}
	    		favorite={favorites.includes(recipe.id)}
	    		{...props}
	    	/>
	    	
	    	))}
	    </ul>
	</div>	
);

RecipeList.propTypes = {
	recipes: propTypes.array,
	favorites: propTypes.array,
	style: propTypes.object,
}
export default RecipeList;