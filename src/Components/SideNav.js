import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    return (
      <Menu secondary vertical>
        <Menu.Item
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick}
        />
        <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    );
  }
}

export default SideNav;