import React, { Component } from 'react';
import {Image} from "semantic-ui-react"
import ReactCardFlip from 'react-card-flip';
class Home extends Component {
  render() {
    React.state = {
      isFlipped: false
    }

    const handleClick = (e) => {
      e.preventDefault();
      React.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    return (
      <div>
        <ReactCardFlip isFlipped={React.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_COMPONENT>
        <Image src='logo2.png' size="medium" centered/>
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_COMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
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