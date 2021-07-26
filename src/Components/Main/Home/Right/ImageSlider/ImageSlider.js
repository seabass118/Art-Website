import React from 'react'
import simon from '../../../Images/Paintings/simon.jpg';
import new_york from '../../../Images/Paintings/new_york_cafe.jpg';
import girl from '../../../Images/Paintings/girl.jpg';
import dont_walk from '../../../Images/Paintings/dont_walk.jpeg';
import sliderArrow from '../../../Images/Icons/slider_arrow.svg';
import './ImageSlider.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
const slideImages = [
    simon,
    new_york,
    girl,
    dont_walk
];

const Properties = {
    prevArrow: <div style={{width: "30px", marginRight: "-30px", transform: "rotate(180deg)", userSelect: "none"}}><img src={sliderArrow} alt="previous arrow" draggable="false"></img></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px", userSelect: "none"}}><img src={sliderArrow} alt="next arrow" draggable="false"></img></div>
}

function ImageSlider() {
    return (
        <div className="ImageSlider">
            <Slide easing="ease" {...Properties}>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default ImageSlider 
