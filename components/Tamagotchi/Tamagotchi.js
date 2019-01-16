import React from 'react';
// import { render } from 'react-dom';

import Face from '../Face/Face';
import StatBar from '../Stats/StatBar';
import hungerIcon from '../../assets/kandf.png';
import funIcon from '../../assets/die.png';
import healthIcon from '../../assets/midical.png';
import lifeIcon from '../../assets/heart.png';

class Tamagotchi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lookDirection: 'default',
      moveCount: 0,
      hunger: 100,
      fun: 100,
      health: 100,
      life: 100,
      dead: false
    };
    this.moveEyes = this.moveEyes.bind(this);
  }

  componentDidMount() {
    this.eyeInterval = setInterval(this.moveEyes, 2000);
    this.hungerInterval = setInterval(() => this.reduceStats('hunger'), 288);
    this.funInterval = setInterval(() => this.reduceStats('fun'), 222);
    this.healthInterval = setInterval(() => this.reduceStats('health'), 366);
    // this.lifeInterval = setInterval(() => this.reduceStats('life'), 452);
  }

  clearIntervals = () => {
    clearInterval(this.eyeInterval);
    clearInterval(this.hungerInterval);
    clearInterval(this.funInterval);
    clearInterval(this.healthInterval);
    // clearInterval(this.lifeInterval);
  };

  componentWillUnmount() {
    this.clearIntervals();
  }

  moveEyes() {
    this.setState({
      lookDirection: this.getRandomLookDirection(),
      moveCount: this.state.moveCount + 1,
      droopyEyes: this.state.moveCount > 8 ? true : false
    });
  }

  getDroopyEyes = () => {
    return (
      this.state.life < 64 ||
      this.state.health < 64 ||
      this.state.hunger < 40 ||
      this.state.fun < 30
    );
  };

  reduceStats = (stat) => {
    if (stat === 'life') {
      let newLife;
      const { fun, health, hunger } = this.state;
      if (fun + health + hunger < 150) {
        newLife = this.state[stat] - 10;
      } else if (fun + health + hunger < 200) {
        newLife = this.state[stat] - 5;
      } else if (fun + health + hunger < 250) {
        newLife = this.state[stat] - 1;
      } else {
        newLife = this.state[stat];
      }
      this.setState({
        [stat]: newLife
      });
      console.log(fun + health + hunger);
    } else {
      const newStat = this.state[stat] > 0 ? this.state[stat] - 1 : 0;
      this.setState({
        [stat]: newStat
      });
      if (newStat <= 0) {
        this.die();
      }
    }
  };

  increaseStats = (stat) => {
    const newStat = this.state[stat] + 10;
    this.setState({
      [stat]: newStat
    });
  };

  die = () => {
    this.setState({
      dead: true
    });
    this.clearIntervals();
  };

  getRandomLookDirection() {
    const directions = ['up', 'down', 'left', 'right', 'default'];
    const randomNumber = Math.floor(Math.random() * 5);
    return directions[randomNumber];
  }

  render() {
    return (
      <div>
        <Face
          droopyEyes={this.getDroopyEyes()}
          look={this.state.lookDirection}
          dead={this.state.dead}
        />
        <StatBar
          stat={this.state.hunger}
          image={hungerIcon}
          increase={() =>
            this.state.hunger < 100 ? this.increaseStats('hunger') : null
          }
        />
        <StatBar
          stat={this.state.fun}
          image={funIcon}
          increase={() =>
            this.state.fun < 100 ? this.increaseStats('fun') : null
          }
        />
        <StatBar
          stat={this.state.health}
          image={healthIcon}
          increase={() =>
            this.state.health < 100 ? this.increaseStats('health') : null
          }
        />
        <StatBar
          stat={this.state.life}
          image={lifeIcon}
          increase={() =>
            this.state.life < 100 ? this.increaseStats('life') : null
          }
        />
      </div>
    );
  }
}

export default Tamagotchi;
