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

const slideTitles = [
    'Simon',
    'New York Cafe Crossing',
    'Girl',
    'Dont Walk'
];

const slideLinks = [
    'https://www.artfinder.com/artist/simon-blackley#/quick-view/simon-e9b2e',
    'https://www.artfinder.com/artist/simon-blackley/page-2#/quick-view/cafe-crossing-new-york',
    'artfinder.com/artist/simon-blackley#/quick-view/girl-2d0a4',
    'https://www.artfinder.com/artist/simon-blackley/page-2#/quick-view/dont-walk-8a777'
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
                    <div className="slide_title">
                        <div style={slide_text}>
                            <a className="slideLink" href={slideLinks[0]}>{slideTitles[0]}</a>
                        </div>
                    </div>
                    <div className="slide_image" style={{'backgroundImage': `url(${slideImages[0]})`, 'height': 'calc(100vh - 50px)'}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_title">
                        <div style={slide_text}>
                            <a className="slideLink" href={slideLinks[1]}>{slideTitles[1]}</a>
                        </div>
                    </div>
                    <div className="slide_image" style={{'backgroundImage': `url(${slideImages[1]})`, 'height': 'calc(100vh - 50px)'}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_title">
                        <div style={slide_text}>
                            <a className="slideLink" href={slideLinks[2]}>{slideTitles[2]}</a>
                        </div>
                    </div>
                    <div className="slide_image" style={{'backgroundImage': `url(${slideImages[2]})`, 'height': 'calc(100vh - 50px)'}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="slide_title">
                        <div style={slide_text}>
                            <a className="slideLink" href={slideLinks[3]}>{slideTitles[3]}</a>
                        </div>
                    </div>
                    <div className="slide_image" style={{'backgroundImage': `url(${slideImages[3]})`, 'height': 'calc(100vh - 50px)'}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

const slide_text = {

}

export default ImageSlider 
