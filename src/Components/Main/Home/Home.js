import React from 'react';
import HomeLeft from './Left/HomeLeft';
import HomeRight from './Right/HomeRight';
import './Home.css'

function Home() {
    return (
        <div>
            <div className="Home_Container" style={Home_Container}>
                <div className="Text_Container" style={Text_Container}>
                    <HomeLeft />
                </div>
                <div className="Image_Container" style={Image_Container}>
                    <HomeRight />
                </div>
            </div>
        </div>
    )
}

const Text_Container = {
    width: '50%',
    height: '100%',
}

const Image_Container = {
    width: '50%', 
    height: '100%',
}

const Home_Container = {
    width: '100%',
    height: '100%', //100vh - Header
    display: 'flex',
    flexDirection: 'row'
}

export default Home
