import React from 'react'
import Header from '../../Common/Header/Header'
import LandingPart1 from '../Landing_part1/LandingPart1'
import LandingPart2 from '../Landing_part2/LandingPart2'
// import Landing_part3 from '../Landing_part2/Landing_part3'
// import Landing_part4 from '../Landing_part2/Landing_part4'


function LandingHome() {
    return (
        <div>
            <Header />
            <LandingPart1 />
            <LandingPart2 />
            {/* <Landing_part3 />
            <Landing_part4 /> */}
        </div>
    )
}

export default LandingHome
