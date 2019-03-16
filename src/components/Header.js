import React from 'react';
import Emoji from '../static/images/emoji.png';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const HeaderLink = ({ children, ...props }) => {
	return (
		<NavLink to="/" {...props}>
				{children}
		</NavLink>
	)
};


const Header = () => (

	<header  className ='header'>
	   <img	src={Emoji}/>
	   <h1 className='head'>My Recipes</h1>
	   <nav>
		  	<HeaderLink to="/">Home</HeaderLink>
		  	<HeaderLink to="/favorites">Favorites</HeaderLink>
	   </nav>
	</header>
);


HeaderLink.propTypes = {
	children: propTypes.node,
}
export default Header;
	
