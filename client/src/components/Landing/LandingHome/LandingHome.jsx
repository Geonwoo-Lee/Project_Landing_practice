import React from 'react'
import Header from '../../Common/Header/Header'
import Landing_part1 from '../Landing_part1/Landing_part1'
import Landing_part2 from '../Landing_part2/Landing_part2'
// import Landing_part3 from '../Landing_part2/Landing_part3'
// import Landing_part4 from '../Landing_part2/Landing_part4'


function LandingHome() {
    return (
        <div>
            <Header />
            <Landing_part1 />
            <Landing_part2 />
            {/* <Landing_part3 />
            <Landing_part4 /> */}
        </div>
    )
}

export default LandingHome
