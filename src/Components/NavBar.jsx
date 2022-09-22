
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
        <div style ={{position:'fixed', top: '0', width: '100%', zIndex: '3'}}>
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
            name='network'
            active={activeItem === 'network'}
            onClick={handleItemClick}
            >
            Network
            </Menu.Item>
            <Menu.Item
            name='books'
            active={activeItem === 'reading list'}
            onClick={handleItemClick}
            >
            Reading List
            </Menu.Item>
        </Menu>
        </div>
    )
}

export default withRouter(NavBar)
