import React from 'react';

const imageSlide = (props) => {
    console.log(`url(`+props.path+ props.file+`)`);

    const styles = {
      backgroundImage: `url(`+props.path+ props.file+`)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
}

export default imageSlide;

