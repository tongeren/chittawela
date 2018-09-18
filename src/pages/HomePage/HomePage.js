import React, { Fragment, Component } from 'react';
// import classes from './HomePage.css';
import Banner from '../../components/Banner/Banner';
// import Toolbar from '../../components/Toolbar/Toolbar';
import Layout from '../../hoc/Layout/Layout';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <Layout>
            <Banner />
          </Layout>
      </Fragment>
    );
  }
}

export default HomePage;
