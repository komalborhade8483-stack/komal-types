import React from 'react'
import keypad_icon from '../assets/keyboard_icon.png'
import info_icon from '../assets/info_icon.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
            <div className="logo">
                  KomiTypes
            </div>

            <div className="links">
                  <Link className="link">
                        <img src={keypad_icon} alt="" />
                  </Link>

                  <Link className='link'>
                        <img src={info_icon} alt="" />
                  </Link>

            </div>
      </nav>
    </header>
  )
}

export default Navbar