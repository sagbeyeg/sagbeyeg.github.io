import React, { Component } from 'react';
import {
  Menu, Button, Sticky, Image
} from "semantic-ui-react";

class Navbar extends Component {
  state = { 
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // <button onClick={() => window.scrollTo(0, 1500)}>Open Me</button>
    const { activeItem } = this.state
    return (
      <Sticky>
        <Menu pointing secondary inverted size="medium">
          <Menu.Menu position='left'>
            <Menu.Item>
              <Image src='inverse-logo.png' size="mini"/>
            </Menu.Item>
          </Menu.Menu>
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
            <Menu.Item>
              <Button
                name='resume'
                href='SisanwunmiAgbeyegbeResume.pdf'
                target="_blank"
                rel="noreferrer">
                  Resume
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
}

export default Navbar;