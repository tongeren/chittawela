import React, { Fragment, Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import classes from './App.css';
import chittawelaLogo from './assets/logos/chittawela_colour_text_under.png';
import menuIcon from './assets/icons/Menu.svg';
import backGround from './assets/images/background_1.jpg';

const TAGLINE = "Now is the Time to Soothe Your Soul";
const BUTTONTEXT = "RESERVE MY SPOT!";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <BrowserRouter> */}
          <div className={classes.RowGrid}>
            <header className={classes.NavBar}>
              <img className={classes.MenuIcon} src={menuIcon} alt="MenuLogo" /> 
              <p></p>
              <button className={classes.Button}>{BUTTONTEXT}</button> 
            </header>
            <div className={classes.ImageContainer}>
              <div className={classes.CompositeImage}>
                <img className={classes.Image} src={backGround} alt="Background"/>
                <div className={classes.LogoAndTagLine}>
                  <img className={classes.Logo} src={chittawelaLogo} alt="Chittawela"/>
                  <p className={classes.Content}>{TAGLINE}</p> 
                </div>  
              </div>  
            </div>
          </div>
        {/* </BrowserRouter> */}
      </Fragment>
    );
  }
}

export default App;

/* <div className={classes.PageContainer}>
          <header className={classes.NavBar}>
            Test
          </header> */