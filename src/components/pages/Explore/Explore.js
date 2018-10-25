import React, { Fragment } from 'react';
import Carousel from '../../UI/Carousel/Carousel';
import IMAGES from './Images';

const TEXT = "จิตตเวฬา - Chittawela In Pali-Sanskrit language Chittawela means the time for your heart." 
// As the world and your lives seem to go ever faster, you need Chittawela - 
// a moment to step back and become aware of where are you. 
// This time helps you to reconnect to your heart and soul, to what truly matters to you. 
// This time for your heart, this moment of calm and reflection, is what we offer in two 
// rejuvenating retreats. Take a time to reflect and connect with your heart and soul. 
// Experience the beautiful surroundings, fascinating culture and a healthy lifestyle. 
// Exchange inspiration with other guests."

const explore = () => (
  <Fragment>
    <Carousel imgPaths={IMAGES.map(image => image.publicId)} autoSlideInterval={3.6} /> 
    <p>{TEXT}</p>
  </Fragment>
);

export default explore;
