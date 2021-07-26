import React from 'react'
import Title from './Title/Title'

function HomeLeft() {
    return (
        <div className="HomeLeft">
            <div className="Left_Container" style={Left_Container}>
                <div style={Title_Position}>
                    <Title />
                </div>
            </div>
        </div>
    )
}

const Left_Container = {
    width: "calc(100% - 40px)",
    height: "calc(100% - 40px)",
    padding: "20px",
}

const Title_Position = {
    position: "absolute",
}

export default HomeLeft
