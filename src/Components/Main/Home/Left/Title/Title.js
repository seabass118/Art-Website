import React from 'react'
import './Title.css'

const Name = "Simon Blackley";
const Artist_String = "Artist"
const Location = "UK";
function Title() {
    
    return (
        <div className="Title">
            <div style={Name_Container}>
                <div className="Name" style={Name_Text}>
                    {Name}
                </div>
            </div>
            <div style={Artist_Container}>
                <div className="Artist" style={Artist_Text}>
                    {Artist_String}
                </div>
            </div>
            <div style={Location_Container}>
                <div className="Location" style={Location_Text}>
                    {Location}
                </div>
            </div>
        </div>
    )
}

const Name_Container = {
    width: "fit-content",
    height: "auto",
    backgroundColor: "rgb(33, 33, 48)",
    padding: "15px",
    marginBottom: "20px"
}

const Name_Text = {
    color: "#fff"
}

const Artist_Container = {
    width: "fit-content",
    height: "auto",
    backgroundColor: "rgb(33, 33, 48)",
    padding: "15px",
    marginBottom: "20px"
}

const Artist_Text = {
    color: "#fff"
}

const Location_Container = {
    width: "fit-content",
    height: "auto",
    backgroundColor: "rgb(33, 33, 48)",
    padding: "15px",
    marginBottom: "20px"
}

const Location_Text = {
    color: "#fff"
}

export default Title
