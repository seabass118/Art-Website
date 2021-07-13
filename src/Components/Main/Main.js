import React from 'react';
import ImageSlider from './ImageSlider/ImageSlider';

function Main() {
    return (
        <div className="Main">
            <div className="Main_Container" style={Main_Container}>
                <div className="Text_Container" style={Text_Container}></div>
                <div className="Image_Container" style={Image_Container}>
                    <ImageSlider />
                </div>
            </div>
            
        </div>
    )
}

const Main_Container = {
    width: '100%',
    height: 'calc(100vh - 60px)', //100vh - Header
    display: 'flex',
    flexDirection: 'row'
}

const Text_Container = {
    width: '50%',
    height: '100%',
}

const Image_Container = {
    width: '50%', 
    height: '100%',
}

export default Main
