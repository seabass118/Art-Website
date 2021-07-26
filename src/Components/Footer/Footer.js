import React from 'react'
import './Footer.css';
import Nuraf from '../../Nuraf_white.png'
import Facebook from './Icons/facebook.svg';
import Instagram from './Icons/instagram.svg';
import Github from './Icons/github.svg';

function Footer() {
    return (
        <div style={Footer_Container}>
            <div className="Footer_Content" style={{justifyContent: 'flex-start'}}>
                <img className="Social_Media_Icon" src={Facebook} alt="Facebook icon" ></img>
                <img className="Social_Media_Icon" src={Instagram} alt="Instagram icon"></img>
                <img className="Social_Media_Icon" src={Github} alt="Github icon" ></img>
            </div>
            <div className="Footer_Content" style={{justifyContent: 'center'}}>
                © Simon Blackley
            </div>
            <div className="Footer_Content" style={{justifyContent: 'flex-end'}}>
                <img src={Nuraf} alt="Nuraf Logo" style={Nuraf_Image}></img>
            </div>
        </div>
    )
}

const Footer_Container = {
    width: "calc(100% - 20px)",
    height: "calc(51px - 20px)",
    backgroundColor: "rgb(33, 33, 48)",
    padding: "10px",
    color: "#fff",
    display: "flex",
    flexDirection: "row"
}

const Nuraf_Image = {
    backgroundSize: "cover",
    width: "45px",
    height: "auto"
}

export default Footer
