import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
// import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome to Sisan's Portfolio!!!!</h1>
        <AboutMe/>
        <br />
        <Experience />
        <br />
        <Contact />
        <SideNav />
      </div>
    );
  }
}

export default App;
