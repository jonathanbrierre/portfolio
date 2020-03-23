
import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

const NavBar = (props) => {

    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, { name }) => {
        props.history.push(`/${name}`)
        setActiveItem(name)
    }

    return (
        <div style ={{position:'fixed', top: '0', width: '100%'}}>
        <Menu>
            <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
            >
            About
            </Menu.Item>

            <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={handleItemClick}
            >
            Projects
            </Menu.Item>

            <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={handleItemClick}
            >
            Contact Info
            </Menu.Item>
        </Menu>
        </div>
    )
}

export default withRouter(NavBar)
