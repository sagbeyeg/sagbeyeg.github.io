import React, { Component } from 'react';
import {Image} from "semantic-ui-react"

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Image src='logo.png' size="medium" centered/> */}
        <Image src='logo2.png' size="medium" centered/>
        <div className="card home">
          <h5 className="small-header">Hi there! My name is</h5>
          <h1 className="large-header">Sisanwunmi Agbeyegbe</h1>
          <h1 className="large-header">Software Engineer</h1>
          <h5 className="small-header">I'm based in the New York Metropolitan Area and specialize in building full stack web applications. </h5>
        </div>
      </div>
    );
  }
}

export default Home;