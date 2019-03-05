import React from 'react';
import Emoji from '../static/images/emoji.png';

const Header = () => (

	<header  className ='header'>
	   <img	src={Emoji}/>
	   <h1 className='head'>My Recipes</h1>
	</header>
);

export default Header;
	
