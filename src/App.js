import React, { Component } from 'react';
import Navbar from './common/Navbar'
import Info from './components/Info'
import SkillBar from './components/SkillBar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Info />
        <SkillBar />
      </div>
    );
  }
}

export default App;
