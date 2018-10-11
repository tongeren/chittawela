import React, { Fragment } from 'react';
import song from '../../../assets/music/Love_at_Sundown.mp3';
// import silence from '../../../assets/music/silence.mp3';
// import song from './Song';

import Sound from 'react-sound';
// import cloudinary from 'cloudinary-core';

// const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'chittawela'});

// const SONG = '../../../assets/music/Love_at_Sundown.mp3';

// const song = cloudinaryCore.url('Music/Love_at_Sundown.mp3');

const soundError = (errorCode, description) => (
    console.log(errorCode + ':' + description)
)

const MUSIC_SETTINGS = {
    url: song, /* cloudinaryCore.url('Music/Love_at_Sundown.mp3'), */
    playStatus: Sound.status.PLAYING,
    volume: 50,
    autoLoad: true,
    loop: true,
    onError: soundError()
};

const music = () => {
    
    // window.onload = function() {
    //    var context = new AudioContext();
    // }
    
    return(
        <Fragment>
            <Sound {...MUSIC_SETTINGS} /> 
     
            {/* <iframe title="iframe" src={silence} allow="autoplay" id="audio" style={{display:`none`}}></iframe> */}
            {/*
            <audio loop autoPlay> 
                <source src={song} type="audio/mp3" />
            </audio>
            */}
        </Fragment>
    );    
}

export default music;