import React from "react"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#home" className="logo">Portfolio</a>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="mobile-menu-btn">☰</button>
      </div>
    </nav>
  )
}
