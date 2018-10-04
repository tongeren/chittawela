import React, { Component } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';

class Cloudinary extends Component {
   
    render(){
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="chittawela">
                        <div className="responsive">
                            <div className="img">
                                {/* <a target="_blank" href={`http://res.cloudinary.com/christekh/image/upload/christmas.jpg`}> */}
                                    <Image publicId={'Banburee/IMG_8565.jpg'}>
                                                         </Image>
                                {/* </a> */}
                            </div>
                        </div>
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}

export default Cloudinary;