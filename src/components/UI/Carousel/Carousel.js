import React, { Component } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import classes from './Carousel.css';
import Arrow from './Arrow/Arrow';
import ImageSlide from './ImageSlide/ImageSlide';

class Carousel extends Component {
    state = {
        currentImageIndex: 0
    }
    
    componentDidMount() {
        const milliseconds = this.props.autoSlideInterval * 1000;
        // Start autoslide
        this.autoSlide = window.setInterval(() => this.nextSlide() , milliseconds);
    }
  
    componentWillUnmount() {
        // Stop autoslide 
        window.clearInterval(this.autoSlide);
    }

    previousSlide = () => {
        this.getSlide({flagForward: false});
    }
    
    nextSlide = () => {
        this.getSlide({flagForward: true});
    }

    getSlide = ({ flagForward }) => {
        const lastIndex = this.props.imgPaths.length - 1;
        const boundary = flagForward ? lastIndex : 0;
        const direction = flagForward ? 1 : -1;
        const shouldResetIndex = this.state.currentImageIndex === boundary;
        const index =  shouldResetIndex ? (lastIndex - boundary) : this.state.currentImageIndex + direction;
    
        this.setState({
          currentImageIndex: index
        });
    }

    render () {
        return (
            <CloudinaryContext cloudName="chittawela">
                <div className={classes.Carousel}>
                    <Arrow 
                        className={classes.ArrowLeft}
                        direction="left"
                        clickFunction={this.previousSlide}
                        glyph="&#9664;" />
                
                    <ImageSlide 
                        className={classes.ImageSlide}
                        publicId={this.props.imgPaths[this.state.currentImageIndex]}/>
    
                    <Arrow
                        className={classes.ArrowRight}
                        direction="right"
                        clickFunction={this.nextSlide}
                        glyph="&#9654;" />
                </div>
            </CloudinaryContext> 
        );
    }
}

export default Carousel;

