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
        <Icon link
          name='github'
          size='big'
        />
        <br />
        <br />
          <Icon link
            name='linkedin'
            size='big' 
            to="https://www.linkedin.com/in/sisanwunmi-agbeyegbe/"
          />
        <br />
        <br />
        <Icon link
          name='twitter'
          size='big'
        />
        <br />
        <br />
        <Icon link
          name='medium'
          size='big'
        />
      </Menu>
    );
  }
}

export default SideNav;