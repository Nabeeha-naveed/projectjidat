import React from 'react'
import logo from "../../assets/image.png"
import "./header.css"

function Header() {
  return (
    <div className='headerMain'>
        <img className="Header-img" src={logo} alt="logo" />
        <a className='Header-link' href="https://www.instagram.com/project_jidat/?hl=en">@project_jidat</a>
    </div>
  )
}

export default Header