import React from 'react';
import classes from './Arrow.css';

const arrow = ({ direction, clickFunction, glyph }) => {
  let attachedClasses = (direction === "right" ? [classes.Arrow, classes.Right] : [classes.Arrow, classes.Left]);

  return(
    <div className={attachedClasses.join(' ')} onClick={ clickFunction }>
      { glyph }
    </div>
  );
}

export default arrow;