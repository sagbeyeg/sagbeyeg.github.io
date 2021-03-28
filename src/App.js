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
        <div className="card home">
          <h5>Hi there! My name is</h5>
          <h1>Sisanwunmi Agbeyegbe</h1>
          <h1>Software Engineer</h1>
          <h5>I'm a Software Engineer based in New York Metropolitan Area who specializes in building full stack web applications. </h5>
        </div>
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
