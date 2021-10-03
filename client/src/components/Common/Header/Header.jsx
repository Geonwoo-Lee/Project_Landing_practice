import React from 'react'
import '../Header/Header.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div>
        <div className="background">
        <div className="flex-container">
        <Link to="/" className="lo">Joycoiding</Link>
        <div className="grow"></div>
        <Link to="/" className="flex-box">BoardPage</Link>
        <Link to="/" className="flex-box">Url Service</Link>
        <Link to="/" className="flex-box">Log in</Link>
        </div>
        </div>
        </div>
    )
}

export default Header
