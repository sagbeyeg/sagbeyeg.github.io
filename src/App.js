import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
// import {
//   Menu
// } from "semantic-ui-react";

class App extends React.Component {
  state = { 
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <div className="App">
        {/* <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu> */}
        <h1>Welcome to Sisan's Portfolio</h1>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
