import React, { Fragment, Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <BrowserRouter> */}
          <HomePage />
        {/* </BrowserRouter> */}
      </Fragment>
    );
  }
}

export default App;

