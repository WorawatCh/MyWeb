import React, { Component } from 'react';
import Navbar from './common/Navbar'
import Info from './components/Info'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Info />
      </div>
    );
  }
}

export default App;
