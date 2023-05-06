import React from 'react';

const NavBurger = ({ active, handleClick, turnBurgerWhite }) => {

	return (
		<div className={`burger-box__container ${turnBurgerWhite || active ? 'clear' : ''}`}>
			<div className="burger-box" onClick={handleClick}>
				<div id="burger" className={`${active ? 'open' : ''} ${turnBurgerWhite ? 'turned-white' : ''}`}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	)
}

export default NavBurger;