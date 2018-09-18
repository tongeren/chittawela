import React, { Fragment, Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Layout from '../../hoc/Layout/Layout';
import AnimatedIconTripleChevronDown from 
'../../components/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';

import TagLine from '../../components/TagLine/TagLine';
import BigLogo from '../../components/BigLogo/BigLogo';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <Layout>
            <Banner>
              <BigLogo />
              <TagLine />  
              <AnimatedIconTripleChevronDown />
            </Banner>  
          </Layout>
      </Fragment>
    );
  }
}

export default HomePage;
