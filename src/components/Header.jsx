import React from 'react'
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header id='header'>
        <img src={Logo} alt='image-loading' id='header img'/>
        <h1>investment calculator</h1>
    </header>
  )
}

export default Header
