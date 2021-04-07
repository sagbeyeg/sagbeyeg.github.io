import React, { Component } from 'react';
import {Image} from "semantic-ui-react"
import ReactCardFlip from 'react-card-flip';
class Home extends Component {
  state = {
    isFlipped: false
  }

  handleClick = (e) => {
    // e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    
    return (
      <div>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div onMouseEnter={this.handleClick}>
          <Image className="home-logo" src='logo2.png' size="large" centered/>
          </div>

          <div>
            <div className="card home">
              <h5 className="small-header">Hi there! My name is</h5>
              <h1 className="large-header">Sisanwunmi Agbeyegbe</h1>
              <h1 className="large-header">Software Engineer</h1>
              <h5 className="small-header">I'm based in the New York Metropolitan Area and specialize in building full stack web applications. </h5>
            </div>
          </div>
        </ReactCardFlip>

        {/* <Image src='logo.png' size="medium" centered/> */}
        {/* <Image src='logo2.png' size="medium" centered/>
        <div className="card home">
          <h5 className="small-header">Hi there! My name is</h5>
          <h1 className="large-header">Sisanwunmi Agbeyegbe</h1>
          <h1 className="large-header">Software Engineer</h1>
          <h5 className="small-header">I'm based in the New York Metropolitan Area and specialize in building full stack web applications. </h5>
        </div> */}
      </div>
    );
  }
}

export default Home;