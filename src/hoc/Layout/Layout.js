import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import AnimatedIconTripleChevronDown from '../../components/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggledHandler = () => {
    this.setState( (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  }

  render () {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /> 
        <main>
          {this.props.children}
        </main>
        <Footer>
          <AnimatedIconTripleChevronDown />
        </Footer>
      </div>
    )};
}

export default Layout;