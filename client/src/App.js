import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Question from './containers/Questions/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Question />
      </div>
    );
  }
}

export default App;
