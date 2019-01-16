import React from 'react';

import { token } from '../../token';
import Tamagotchi from '../Tamagotchi/Tamagotchi';

class App extends React.Component {
  state = {
    input: '',
    tamagotchiName: ''
  };

  updateInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addTamagotchi = async () => {
    const username = this.state.input;
    // const username = 'lucyewright';
    const url = `https://api.github.com/users/${username}?access_token=${token}`;
    const response = await fetch(url);
    const userData = await response.json();
    this.setState({
      tamagotchiName: userData.name ? userData.name : userData.login
    });
  };

  render() {
    return (
      <div>
        <nav>
          <h1>My Tamagotchi github friends</h1>
          <input
            placeholder="Github username here..."
            type="text"
            value={this.state.input}
            onChange={this.updateInput}
          />
          <button onClick={this.addTamagotchi}>Add a Friend</button>
        </nav>
        <section className="allGames">
          {this.state.tamagotchiName && <h4>{this.state.tamagotchiName}</h4>}
          {this.state.tamagotchiName && <Tamagotchi />}
        </section>
      </div>
    );
  }
}

export default App;
