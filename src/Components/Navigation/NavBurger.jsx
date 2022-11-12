import React from 'react';

const NavBurger = ({active, handleClick}) => {
	return (
		<div className="burger-box" onClick={handleClick}>
			<div id="burger" className={`${active ? 'open' : ''}`}>
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		</div>
		)
}

export default NavBurger;