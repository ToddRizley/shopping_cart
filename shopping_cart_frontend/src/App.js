import React, { Component } from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProductForm />
      </div>
    );
  }
}

export default App;
