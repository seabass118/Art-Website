import React from 'react';
import './Header.css';


function Header() {
    return (
        <div className="Header">
            <div className="Header_Cont" style={Header_Cont}>
                <div style={{"width": "calc(100% - 20px)", "height": "calc(100% - 20px)", "padding": "10px", "display": "flex", "flex-direction": "row", "align-items": "center"}}>
                    <div className="logo">
                        Simon.
                    </div>
                    <input id="burger" type="checkbox" />

                    <label for="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <nav>    
                    <ul style={{"list-style-type": "none"}}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Gallery">Gallery</a></li>
                        <li><a href="/Contact">Contact</a></li>
                    </ul>  
                    </nav>
                </div>
            </div>
        </div>
    )
}


const Header_Cont = {
    width: '100%',
    height: '60px',
    backgroundColor: 'rgb(33 33 48)'
}

export default Header;
