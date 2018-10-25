import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ChittawelaPage from './containers/ChittawelaPage/ChittawelaPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <ChittawelaPage />
      </BrowserRouter>
    );
  }
}

export default App;

