import React from 'react';
// import { render } from 'react-dom';

import Face from '../Face/Face';

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lookDirection: 'default',
      droopyEyes: false,
      moveCount: 0
    };
    this.moveEyes = this.moveEyes.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.moveEyes, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  moveEyes() {
    this.setState({
      lookDirection: this.getRandomLookDirection(),
      moveCount: this.state.moveCount + 1
      //   ,droopyEyes: this.state.moveCount > 6 ? true : false
    });
  }

  getRandomLookDirection() {
    const directions = ['up', 'down', 'left', 'right', 'default'];
    const randomNumber = Math.floor(Math.random() * 4);
    return directions[randomNumber];
  }

  render() {
    return (
      <div>
        <Face
          droopyEyes={this.state.droopyEyes}
          look={this.state.lookDirection}
          id="looking"
        />
      </div>
    );
  }
}

export default Tamagotchi;
