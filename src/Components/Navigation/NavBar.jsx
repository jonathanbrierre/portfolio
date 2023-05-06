
import React from 'react';
import { withRouter } from 'react-router-dom'
import NavBurger from './NavBurger';

const NavBar = ({ openNav, handleNavigationToggle, location, turnBurgerWhite }) => {

    return (
        <div
            className={
                `nav-bar ${openNav ? 'open-nav' : ''} ${location.pathname === '/' ? 'home-route' : ''}`
            }
        >
            <NavBurger active={openNav} handleClick={handleNavigationToggle} turnBurgerWhite={turnBurgerWhite} />
        </div>
    )
}

export default withRouter(NavBar)
