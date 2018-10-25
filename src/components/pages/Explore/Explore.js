import React, { Fragment } from 'react';
import Carousel from '../../UI/Carousel/Carousel';
import IMAGES from './Images';

const explore = () => (
  <Fragment>
    <Carousel imgPaths={IMAGES.map(image => image.publicId)} autoSlideInterval={3.6} /> 
    <p>LATER</p>
  </Fragment>
);

export default explore;
