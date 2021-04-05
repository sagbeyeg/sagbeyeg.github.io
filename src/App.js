import React from 'react'
import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import {Image} from "semantic-ui-react"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideNav />
        {/* <Image src='logo.png' size="medium" centered/> */}
        <Image src='logo2.png' size="medium" centered/>
        <div className="card home">
          <h5 className="small-header">Hi there! My name is</h5>
          <h1 className="large-header">Sisanwunmi Agbeyegbe</h1>
          <h1 className="large-header">Software Engineer</h1>
          <h5 className="small-header">I'm based in the New York Metropolitan Area and specialize in building full stack web applications. </h5>
        </div>
        <AboutMe/>
        <Experience />
        <Contact />
        <Image src='logo2.png' size="tiny" centered/>
      </div>
    );
  }
}

export default App;
