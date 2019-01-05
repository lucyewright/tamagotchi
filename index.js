import React from 'react';
import { render } from 'react-dom';
import './styles.css';

import Tamagotchi from './components/Tamagotchi/Tamagotchi';

const App = () => {
  return (
    <div>
      <nav>
        <h1>My Tamagotchi github friends</h1>
        <input placeholder="Github username here..." type="text" />
      </nav>
      <section className="allGames">
        <div>
          <Tamagotchi />
        </div>
      </section>
    </div>
  );
};

// const App = () => {
//   return (
//     <div className="App">
//       <Tamagotchi />
//     </div>
//   );
// };

render(<App />, document.getElementById('root'));
