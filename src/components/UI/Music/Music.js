import React, { Component, Fragment } from 'react';
import classes from './Music.css';
import song from '../../../assets/music/Love_at_Sundown.mp3';
import playIcon from '../../../assets/icons/Play.svg';
import pauseIcon from '../../../assets/icons/Pause.svg';

class Music extends Component {
    state = {
        muted: true
    }

    toggleMusicOnOff = () => {
        this.setState( (prevState) => {
            return { muted: !prevState.muted };
        } );
    } 

    render() {
        let playerIcon = this.state.muted ? playIcon : pauseIcon;

        return(
            <Fragment>
                <img className={classes.Icon} onClick={this.toggleMusicOnOff} src={playerIcon} alt="playerIcon" />
                <audio loop muted={this.state.muted} autoPlay> 
                    <source src={song} type="audio/mp3" />
                </audio>
            </Fragment>
        );
    }        
}

export default Music;