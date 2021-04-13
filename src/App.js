import React from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import SideNav from "./Components/SideNav";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Education from "./Components/Education";

class App extends React.Component {
  state = {
    activeItem: "home",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="App">
        <Navbar
          handleItemClick={this.handleItemClick}
          activeItem={this.state.activeItem}
        />
        <SideNav />
        <Home />
        <AboutMe />
        <Projects />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
