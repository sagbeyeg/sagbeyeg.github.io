import React, { Component } from 'react';
import {
  Menu, Icon
} from "semantic-ui-react";

class SideNav extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary vertical>
        <Icon 
          name='github'
          size='big'
        />
        <br />
        <br />
        <Icon
          name='linkedin'
          size='big'
        />
        <br />
        <br />
        <Icon
          name='twitter'
          size='big'
        />
        <br />
        <br />
        <Icon
          name='medium'
          size='big'
        />
      </Menu>
    );
  }
}

export default SideNav;