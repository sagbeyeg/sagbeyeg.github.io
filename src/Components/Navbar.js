import React, { Component } from 'react';
import {
  Menu, Button, Sticky, Image
} from "semantic-ui-react";

class Navbar extends Component {
  // state = { 
  //   activeItem: 'home' 
  // }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.props
    const {handleItemClick} = this.props
    console.log(activeItem)
    return (
      <Sticky>
        <Menu pointing secondary inverted size="large">
          <Menu.Menu position='left'>
            <Menu.Item>
              <Image src='inverse-logo.png' size="mini"/>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='work'
              active={activeItem === 'work'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={handleItemClick}
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