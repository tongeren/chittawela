import React, { Fragment } from 'react';
import classes from './Arrow.css';

const arrow = (props) => {
  let attachedClasses = (props.direction === "right" 
    ? [props.className, classes.Arrow, classes.Right] 
    : [props.className, classes.Arrow, classes.Left]);

  return(
    <Fragment>
      <div className={attachedClasses.join(' ')} onClick={ props.clickFunction }> 
        { props.glyph }
      </div>
    </Fragment>
  );
}

export default arrow;
