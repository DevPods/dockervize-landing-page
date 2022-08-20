import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {

    return (
      <h1>Dockervize Landing Page</h1>
    );
  }
}


render(<App />, document.querySelector('#root'));
