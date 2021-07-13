import React from 'react';

function Header() {
    return (
        <div className="Header">
            <div className="Header_Cont" style={Header_Cont}></div>
        </div>
    )
}

const Header_Cont = {
    width: '100%',
    height: '60px',
    backgroundColor: 'rgb(33 33 48)'
}

export default Header;
