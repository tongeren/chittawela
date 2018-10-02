import React, { Component } from 'react';
import Arrow from './Arrow/Arrow';
import ImageSlide from './ImageSlide/ImageSlide';

class Carousel extends Component {
    state = {
        currentImageIndex: 0
    }
    
    previousSlide () {
        this.getSlide({flagForward: false});
    }
    
    nextSlide () {
        this.getSlide({flagForward: true});
    }

    getSlide ({ flagForward }) {
        const boundary = flagForward ? lastIndex : 0;
        const direction = flagForward ? 1 : -1;
        const lastIndex = imgUrls.length - 1;
        const shouldResetIndex = state.currentImageIndex === boundary;
        const index =  shouldResetIndex ? (lastIndex - boundary) : currentImageIndex + direction;
    
        this.setState({
          currentImageIndex: index
        });
    }

    render () {
        return (
            <div className="carousel">
                <Arrow 
                    direction="left"
                    clickFunction={ this.previousSlide }
                    glyph="&#9664;" />
    
                <ImageSlide file={ imgUrls[this.state.currentImageIndex]} />
    
                <Arrow
                    direction="right"
                    clickFunction={ this.nextSlide }
                    glyph="&#9654;" />
            </div>
        );
    }
}

export default Carousel;

