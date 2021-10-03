import React from 'react'
import '../Landing_part1/Landing_part1.css'
import part1_img from '../../Common/img/part1.png'


function Landing_part1() {
    return (
        <div className="part1-background">
            <div className="part1-container">
                <div className="part1-text">
                    <h1 className="part1-title">Manage URLs on Moa Link.</h1>
                    <p>Your url will be specially managed by LinkMoa. 
                         If you would like to know more please click the link below</p>
                     <button className="part1-btn">show Wiki</button>
                </div>
                <img className="part1-img" src={part1_img} alt="Landing part1_img" />
            </div>
        </div>
    )
}

export default Landing_part1

