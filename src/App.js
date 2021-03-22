import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
// import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Menu
} from "semantic-ui-react";
import Contact from './Components/Contact';
import Experience from './Components/Experience';

class App extends React.Component {
  state = { 
    activeItem: 'home' 
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              active={this.state.activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about'
              active={this.state.activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='work'
              active={this.state.activeItem === 'work'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={this.state.activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='resume'
              active={this.activeItem === 'resume'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <h1>Welcome to Sisan's Portfolio!!!!</h1>
        <AboutMe/>
        <br />
        <Experience />
        <br />
        <Contact />
      </div>
    );
  }
}

export default App;
