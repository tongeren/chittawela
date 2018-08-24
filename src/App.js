import React, { Fragment, Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import CheckOut from './CheckOut/CheckOut';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline /> 
        <img src={require('./assets/logos/chittawela_black_no_text.png')} alt="" />
        {/* <CheckOut /> */}
      </Fragment>
    );
  }
}

export default App;
