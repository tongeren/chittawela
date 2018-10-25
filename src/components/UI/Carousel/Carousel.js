import React, { Component } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import classes from './Carousel.css';
import Arrow from './Arrow/Arrow';
import ImageSlide from './ImageSlide/ImageSlide';

const GLYPH_LEFT = "<"; 
const GLYPH_RIGHT = ">"; 

class Carousel extends Component {
    state = {
        currentImageIndex: 0
    }

    startAutoSlide = () => {
        const milliseconds = this.props.autoSlideInterval * 1000;
        // Start autoslide
        this.autoSlide = window.setInterval(() => this.nextSlide() , milliseconds);
    }

    stopAutoSlide = () => {
        // Stop autoslide 
        window.clearInterval(this.autoSlide);
    }

    resetAutoSlide = () => {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    componentDidMount() {
        this.startAutoSlide();
    }
  
    componentWillUnmount() {
        this.stopAutoSlide();
    }

    previousSlide = () => {
        this.getSlide({flagForward: false});
        this.resetAutoSlide();
    }
    
    nextSlide = () => {
        this.getSlide({flagForward: true});
        this.resetAutoSlide();
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
                    <Arrow className={classes.ArrowLeft} direction="left" clickFunction={this.previousSlide} glyph={GLYPH_LEFT}/> 

                    <ImageSlide className={classes.ImageSlide} imgPaths={this.props.imgPaths} selectedSlide={this.state.currentImageIndex}/>
    
                    <Arrow className={classes.ArrowRight} direction="right" clickFunction={this.nextSlide} glyph={GLYPH_RIGHT} /> 
                </div>
            </CloudinaryContext> 
        );
    }
}

export default Carousel;

