import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideNav />
        <Home />
        <AboutMe/>
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
