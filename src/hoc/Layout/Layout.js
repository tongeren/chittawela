import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';
import AnimatedIconTripleChevronDown from '../../components/navigation/AnimatedIconTripleChevronDown/AnimatedIconTripleChevronDown';
import Footer from '../../containers/Footer/Footer';

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

  tripleChevronDownClickedHandler = () => {
    console.log("Get me to the next page!");
  }

  render () {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /> 
        <main className={classes.Main}>
          {this.props.children}
        </main>
        <Footer>
          <AnimatedIconTripleChevronDown clicked={this.tripleChevronDownClickedHandler}/>
        </Footer>
      </div>
    )};
}

export default Layout;