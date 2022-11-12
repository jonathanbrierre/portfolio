
import React from 'react';
import {withRouter} from 'react-router-dom'
import NavBurger from './NavBurger';

const NavBar = ({openNav, handleNavigationToggle}) => {

    return (
        <div className={`nav-bar ${openNav ? 'open-nav' : ''}`}>
            <NavBurger active={openNav} handleClick={handleNavigationToggle}/>
        </div>
    )
}

export default withRouter(NavBar)
