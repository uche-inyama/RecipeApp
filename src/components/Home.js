import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';


class Home extends React.Component {
  constructor(props){
  	super(props);

  	this.state = {
  		currentRecipe: null
  	};

  	// this.onRecipeClick = this.onRecipeClick.bind(this);
  }
	

	onRecipeClick = (id) => {
		fetch(`${API_URL}/v1/recipes/${id}`)
			.then(res => res.json())
			.then(recipe => {
				this.setState({ currentRecipe: recipe })
			});
		};

	
		
	render(){
		const { recipes, favorites } = this.props.state;
		const { currentRecipe } = this.state;
		return (
			<div>
			    
			    <main className ="recipe">
				    <RecipeList 
					    onClick={this.onRecipeClick}
					    favorites={favorites} 
					    recipes={recipes} 
					    onFavorite={this.props.toggleFavorite}
					    />
				    <RecipeDetail 
					    recipe={currentRecipe}
					    />
			    </main>
			</div>
		)
	}
} 

Home.PropTypes = {
	state: PropTypes.object,
	toggleFavorite: PropTypes.func,
};

export default Home;