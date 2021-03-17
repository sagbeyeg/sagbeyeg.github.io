import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
// import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Menu
} from "semantic-ui-react";

class App extends React.Component {
  state = { 
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    return (
      <div className="App">
        <Menu pointing secondary>
          <Menu.Menu position='right'>
          <Menu.Item
            name='home'
            active={this.activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={this.activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={this.activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
              name='logout'
              active={this.activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <h1>Welcome to Sisan's Portfolio</h1>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
