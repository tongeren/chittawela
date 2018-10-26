import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/navigation/SideDrawer/SideDrawer';
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

  render () {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggledHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} /> 
        <main className={classes.Main}>
          {this.props.children}
        </main> 
        <Footer />
      </div>
    )};
}

export default Layout;

