import React from 'react';
import { Image } from 'cloudinary-react';
import classes from './ImageSlide.css';

const imageSlide = (props) => {
  let numberOfSlides = props.imgPaths.length;

  const wrapperStyle = {
    display: `grid`,
    gridTemplateColumns: `repeat(calc(${numberOfSlides}), 1fr)`,
    transform: `translateX(${0}%)`,
    transition: 'transform ease-out 0.45s',
    overflow: `hidden`
  }

  return (
    <div style={wrapperStyle}>
      { props.imgPaths.map((path, i) => <Image key={i} className={classes.Image} publicId={path} />) }
    </div>
  );
}

export default imageSlide;