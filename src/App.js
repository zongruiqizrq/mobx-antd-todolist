import React, { Component } from 'react';
import Todolist from './compontents/Todolist'
import Counter from './compontents/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    );
  }
}

export default App;
