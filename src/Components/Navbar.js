import React, { Component } from 'react';
import {
  Menu
} from "semantic-ui-react";

class Navbar extends Component {
  state = { 
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='work'
              active={activeItem === 'work'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='resume'
              href='SisanwunmiAgbeyegbeResume.pdf'
              target="_blank"
              rel="noreferrer"
            />
          </Menu.Menu>
        </Menu>
    );
  }
}

export default Navbar;