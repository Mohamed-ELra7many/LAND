
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../../data'

const Navbar = () => {
    const [screen, setScreen] = useState(false)
    return (
        <nav className=' sticky-top'>
            <div className='container d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <NavLink to="/">LAND</NavLink>
                </div>
                <ul className={screen ? "mobile" : "Nav-Links"} onClick={() => setScreen(false)}>
                    {navData.map((item, i) => (
                        <li key={i}>
                            <NavLink to={item.url}>{item.text}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="toggle" onClick={() => setScreen(!screen)}>
                    {screen ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
